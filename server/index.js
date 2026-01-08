import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/', (_req, res) => {
  res.json({ ok: true, service: 'mail' });
});

app.post('/send-mail', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing fields' });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    MAIL_TO,
  } = process.env;

  const haveSmtp = SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS;

  if (!haveSmtp) {
    console.log('[DEV] Mail payload (no SMTP configured):', { name, email, message });
    return res.json({ ok: true, dev: true, info: 'No SMTP configured; logged payload' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: String(SMTP_SECURE || 'false') === 'true',
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const info = await transporter.sendMail({
      from: `Portfolio Mailer <${SMTP_USER}>`,
      to: MAIL_TO || SMTP_USER,
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    });

    console.log('Message sent:', info.messageId);
    res.json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error('Mail error:', err);
    res.status(500).json({ ok: false, error: 'Mail send failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Mail server listening on http://localhost:${PORT}`);
});
