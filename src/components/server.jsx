const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer setup with Bravero SMTP
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.bravero.com',
    port: 587,
    secure: false,
    auth: {
        user: 'sameermujahid7777@gmail.com', // Your Bravero SMTP username
        pass: '5fXrVFZacY7E1Gbp', // Your Bravero SMTP master password
    },
});

// Endpoint to handle form submissions
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Send email
        const info = await transporter.sendMail({
            from: 'sameermujahid7777@gmail.com', // Sender email address (must be verified in Bravero)
            to: 'recipient@example.com', // Recipient email address
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        console.log('Email sent:', info.messageId);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email.' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
