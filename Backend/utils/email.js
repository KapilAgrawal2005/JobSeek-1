const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  //create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.EMAIL_ADDRESS}`,
      pass: `${process.env.APP_EMAIL_PASSWORD}`,
    },
  });

  // 2) Define the email options

  const mailOptions = {
    from: `${process.env.EMAIL_ADDRESS}`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html ? options.html : '',
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
