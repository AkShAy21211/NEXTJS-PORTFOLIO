import nodemailer from 'nodemailer';

const sendEmail = async (name, email, message) => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
  service:"gmail",
    auth: {
      user: process.env.GMAIL_ID, // Your email address
      pass: process.env.APP_PASS, // Your email password or app password
    },
  });

  // Set up email data
  const mailOptions = {
    from: email, // Sender address
    to: process.env.GMAIL_ID, // List of receivers
    subject: `Message from ${name}`, // Subject line
    text: message, // Plain text body
  };

  console.log(mailOptions);
  console.log(transporter);
  
  
  // Send mail
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Email sending failed');
  }
};

export default sendEmail;
