import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

const sendSMS = (to, message) => {
  client.messages.create({
    body: message,
    to,
    from: process.env.TWILIO_PHONE_NUMBER,
  })
  .then(message => console.log(message.sid))
  .catch(error => console.error('Error sending SMS:', error));
};

export default sendSMS;
