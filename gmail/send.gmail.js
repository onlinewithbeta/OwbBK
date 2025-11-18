import nodemailer from "nodemailer";
import cfg from '../cfg.js';

import {
  otpHtml,
  otpText,
  welcomeHtml,
  welcomeText,
  newPasswordHtml,
  newPasswordText,
} from "./template.gmail.js";

const transporter = nodemailer.createTransport({
    service: "gmail", // Use the Gmail service
    auth: {
        user: "onlinewithbeta@gmail.com",
    pass: cfg.GMAILPASS
    }
});




 async function sendEmail(Recipient, Subject, text, html) {
  try {
    console.log("sending Email");
    const info = await transporter.sendMail({
      from: '"onlinewithbeta" <onlinewithbeta@gmail.com>', // Sender info
      to: Recipient, // Recipient address
      subject: Subject, // Subject line
      text: text, // Plain text body
      html: html // HTML body
    });

    console.log("Email sent");
    console.log(info);
  } catch (error) {
    console.error("Error sending email:", error.message);
   throw new Error(error.message)
  }
}


export async function sendGmail(gmail, category, parameters) {

  let payLoad = {};
  /*
  {Subject,text,html}
  */

  if (category === "otp") {
    //parameters= 123456
    payLoad = {
      Subject: "Your Verification Code",
      text: otpText(parameters.value),
      html: otpHtml(parameters.value)
    }
  }
  if (category === "newPassword") {
    //parameters= {username,password}
    payLoad = {
      Subject: "Password Reset Confirmation",
      
      text: newPasswordText(parameters.username,parameters.password),
      
      html: newPasswordHtml(parameters.username,parameters.password)
    }
  }

  if (category === "welcome") {
    //parameters= {username,password}
    payLoad = {
      Subject: "Welcome to Our Platform",
      text: welcomeText(parameters.username,parameters.password),
      html: welcomeHtml(parameters.username,parameters.password)
    }
  }

  await sendEmail(gmail, payLoad.Subject, payLoad.text, payLoad.html);

}

