import nodemailer from "nodemailer";

const sender = '"Bookworm" <confirmation@bookworm.com>'

function setup(){
    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
}

export function sendConfirmEmail(user){
    const transport = setup()
    const email = {
        from: sender,
        to: user.email,
        subject: "Bookworm Confirmation",
        text: `
        welcome to bookworm, Please Confirm you Email.
        
        ${user.genConfirmUrl()}`
    }

    transport.sendMail(email);
}

/** export function sendConfirmEmail(user){
    console.dir(user)
}*/