const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/add-user", userController.addUser);
router.post("/delete-user", userController.deleteUser);
router.post("/edit-phono",userController.editPhoneNumber);
router.post("/edit-user",userController.editUser);
router.get("/getAllUsers",userController.getAllUsers);
router.get("/searchByUserName",userController.searchByUserName);
router.post("/webhook",userController.webhook);
router.post("/fallbackWebhook",userController.fallbackWebhook);
router.get("/getAllMessages",userController.getAllMessages);
router.get("/getMessageByPhone",userController.getMessageByPhone);
router.post("/deleteMessage",userController.deleteMessage);
router.post("/sendMessage",userController.sendMessage);
// router.post('/signup', userController.signup);

// Route for user login
// router.post('/login', userController.login);

module.exports = router;


// if(data.password === inputpassword){
//     window.location.href("/home")
// }else{
//     alert("password is wrong")
// }
