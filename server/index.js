const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// =====================================================
//                CONTACT FORM EMAIL API
// =====================================================
app.post("/send-mail", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // ---------------------------------------------------------
    // 1️⃣ EMAIL TO YOU (Portfolio Owner)
    // ---------------------------------------------------------
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Portfolio Contact",
          email: "jayanthjay751@gmail.com", // verified sender
        },
        to: [
          {
            email: "jayanthjay751@gmail.com", // YOU receive the message
          },
        ],
        subject: "New Portfolio Contact Message",
        htmlContent: `
          <h2>New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    // ---------------------------------------------------------
    // 2️⃣ AUTOMATIC REPLY EMAIL TO USER
    // ---------------------------------------------------------
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Jayanth",
          email: "jayanthjay751@gmail.com", // must be verified sender
        },
        to: [
          {
            email: email, // USER receives this confirmation
          },
        ],
        subject: "Thanks for contacting me!",
        htmlContent: `
          <h2>Hi ${name},</h2>
          <p>Thank you for reaching out! I have received your message:</p>
          <blockquote style="border-left: 3px solid #00ffee; padding-left: 10px; margin: 10px 0;">
            ${message}
          </blockquote>
          <p>I will get back to you shortly.<br><br>Regards,<br><strong>Jayanth</strong></p>
        `,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    // ---------------------------------------------------------
    // RESPONSE
    // ---------------------------------------------------------
    res.status(200).json({ success: true, message: "Emails sent successfully!" });

  } catch (error) {
    console.error("Brevo Error:", error.response?.data || error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

// =====================================================
//                START SERVER
// =====================================================
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
