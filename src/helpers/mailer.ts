import nodemailer from 'nodemailer';
import User from "@/models/userModel";
import bcryptjs from 'bcryptjs'


export const sendEmail = async ({ email, emailType, userId }: any) => {
 try {

  var transport = nodemailer.createTransport({
   host: "sandbox.smtp.mailtrap.io",
   port: 2525,
   auth: {
    user: "",
    pass: ""
   }
  });


  const mailOptions = {
   from: 'sanyampatil869@gmail.com',
   to: email,
   subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
   html: `<h1>hello</h1>`

  }

  const mailresponse = await transport.sendMail
   (mailOptions);
  return mailresponse;

 } catch (error: any) {
  throw new Error(error.message);
 }
}