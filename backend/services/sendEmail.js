import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (to, message) => {
  const msg = {
    to,
    from: process.env.SENDGRID_VERIFIED_SENDER_EMAIL,
    subject: 'Flight Status Update',
    text: message,
  };
  sgMail.send(msg)
    .then(() => console.log('Email sent'))
    .catch(error => console.error('Error sending email:', error));
};

export default sendEmail;
