# CreepAccess
It is a medicine reminder app through intialialization of mern stack and prototype version of  Twiliio.com
what we have used 
Tech Stack
Front End
React
Back End
NodeJS
Express
Database
MongoDB
Notification Service
Twilio

Installation
to database we have  we will be receving is been store in atlas which is fullt working ...and with twilio.com the phone numbers fetched will be manual notified either through whatsapp or sms...which is freely available to us upon some limit
Open a Terminal to Install and Run FrontEnd

cd dashboard
npm i
npm start
This will open a new browser window with react running on it.

Open A new Terminal to run backend

cd Backend
npm i
npm start
Also don't forget to add .env file i=on /Backend/ . It will look like

MONGOURI=
PORT=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
MONGO_URL=
APP_SECRET=
TWILIO_MESSAGING_SERVICE_SID=
input your own if now runnig then start on site ...after creating accocunt and getting your own  number go to manager in twilio console and go to verified numbers and add  any number to local ...number owner will get a otp enter and number will be registered and then go to explore product options yoh will get messaging and user will get notified via sms
Features Fulfilled
☑ Sign up for a Twilio account and create a new project.

☑ Set up a local development environment. Used NodeJS

☑ Write a script to send reminders via SMS using Twilio's Programmable SMS API. The script should query the database for when patients need to take certain medicines and send a reminder message to the customer's phone number using the Twilio API. The message should include the medicine name and dosage.

☑ Translate the CSV into a more functional database using MongoDB.


