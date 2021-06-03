'use strict';
const nodemailer = require('nodemailer');

async function mail(adminEmail, inviteEmail, password) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: adminEmail,
      pass: password
    },
  });

  let info = await transporter.sendMail({
    from: adminEmail,
    to: inviteEmail,
    subject: 'Invitation',
    text: `Добрый день. We're inviting you! Go there http://localhost:3000/signin`,
  });

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

module.exports = mail;
