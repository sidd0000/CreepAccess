require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require("mongoose");
const MONGOURI = process.env.MONGOURI;
const cron = require("node-cron");
const notificationWorker = require("./workers/notificationWorker");
const userRoute = require("./routes/user");
const { UserInfo } = require("./userDetails.js");

const User = mongoose.model("UserInfo");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(userRoute);

const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', true);
mongoose.connect(MONGOURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongoDb database(ATLAS)");
});
mongoose.connection.on("error", err => {
  console.log("Error connecting", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is still disconnected");
});

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`);
});

cron.schedule("55 14 * * *", () => {
  notificationWorker();
});
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Create a new user
    await User.create({
      name,
      email,
      password,
    });
    res.status(201).json({ message: 'ok' });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post("/login", async (req, res) => {
  const { email } = req.body;
  try {
 
    User.findOne({ email: email })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});