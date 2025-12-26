// lib/mail.ts
import nodemailer from "nodemailer";

type SendEmailParams = {
  to: string;
  subject?: string;
  text?: string;
  html?: string;
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // true si port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


export async function sendWelcomeEmail(email: string, firstName: string) {
  try {
    await transporter.sendMail({
      from: '"Titouan BodyFit" <' + process.env.SMTP_USER + '>',
      to: email,
      subject: 'Bienvenue dans la Team ! 🚀',
      html: `
        <h1>Salut ${firstName} !</h1>
        <p>Ton accès est débloqué. Prêt pour ta transformation ?</p>
        <p>À très vite sur le groupe privé.</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("Erreur d'envoi email:", error);
    return { success: false };
  }
}