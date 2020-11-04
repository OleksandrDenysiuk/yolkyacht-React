const sgMail = require("@sendgrid/mail");

export default function sendGridMailer(sendgridApiKey) {
  console.log("sendGridMailer().  sendgridApiKey: ",sendgridApiKey);

  sgMail.setApiKey(sendgridApiKey);
  return sgMail;
}