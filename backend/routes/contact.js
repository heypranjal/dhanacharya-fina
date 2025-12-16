const express = require("express");
const router = express.Router();
const transporter = require("../mailer");

router.post("/", async (req, res) => {
  console.log("📩 Contact API hit", req.body);

  const { name, email, phone, description } = req.body;

  if (!name || !email || !phone || !description) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    await transporter.sendMail({
      from: `"Dhanacharya Website" <contact@dhanacharya.com>`,
      to: "contact@dhanacharya.com",
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${description}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Email failed" });
  }
});

module.exports = router;
