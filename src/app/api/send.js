import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    if (!email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
      // Set up Nodemailer transport
      const transporter = nodemailer.createTransport({
        service: 'gmail', // Use a service like Gmail
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASS, // Your email password or app-specific password
        },
      });

      // Email options
      const mailOptions = {
        from: process.env.EMAIL_USER, // Sender address
        to: process.env.RECEIVER_EMAIL, // Receiver email address
        subject: subject,
        text: `Email: ${email}\n\nMessage: ${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

