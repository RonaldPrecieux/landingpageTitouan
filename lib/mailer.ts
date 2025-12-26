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
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #0f172a;
      font-family: Arial, Helvetica, sans-serif;
      color: #e5e7eb;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #020617;
      border-radius: 12px;
      padding: 32px;
    }
    h1 {
      font-size: 26px;
      margin-bottom: 16px;
      color: #f8fafc;
    }
    p {
      font-size: 15px;
      line-height: 1.6;
      margin-bottom: 14px;
      color: #cbd5f5;
    }
    ul {
      padding-left: 20px;
      margin-bottom: 20px;
    }
    li {
      font-size: 14px;
      margin-bottom: 8px;
      color: #e5e7eb;
    }
    a.cta {
      display: block;
      text-align: center;
      background: #22c55e;
      color: #020617;
      padding: 14px;
      margin: 16px 0;
      border-radius: 8px;
      font-weight: bold;
      text-decoration: none;
    }
    .secondary {
      background: #38bdf8;
    }
    .box {
      border: 1px solid #1e293b;
      border-radius: 10px;
      padding: 20px;
      margin-top: 24px;
    }
    .footer {
      margin-top: 28px;
      font-size: 13px;
      color: #94a3b8;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Salut ${firstName} !</h1>

    <p>
      Ton accès à la <strong>préparation musculation</strong> est maintenant actif.
      Prêt à enclencher ta transformation physique.
    </p>

    <ul>
      <li>Programme structuré sur 8 semaines</li>
      <li>Consignes techniques détaillées</li>
      <li>Progression pensée pour des résultats concrets</li>
    </ul>

    <a
      class="cta"
      href="https://exemple.com/programme-prepa-muscu.pdf"
      target="_blank"
    >
      Télécharger le programme PDF
    </a>

    <p>
      Une <strong>vidéo de démarrage</strong> est disponible pour t’expliquer
      comment appliquer le plan correctement.
    </p>

    <a
      class="cta secondary"
      href="https://exemple.com/video-demarrage-prepa"
      target="_blank"
    >
      Accéder à la vidéo
    </a>

    <div class="box">
      <p>
        Tu veux aller plus loin ?  
        Des <strong>séances de coaching personnalisées</strong> sont disponibles :
      </p>

      <ul>
        <li>Ajustement précis du programme</li>
        <li>Analyse de ton entraînement</li>
        <li>Suivi et feedback hebdomadaire</li>
      </ul>

      <a
        class="cta"
        href="https://exemple.com/coaching-prive"
        target="_blank"
      >
        Découvrir le coaching personnalisé
      </a>
    </div>

    <div class="footer">
      <p>
        Discipline. Constance. Résultats.
      </p>
      <p><strong>Titouan BodyFit</strong></p>
    </div>
  </div>
</body>
</html>
`,

    });
    return { success: true };
  } catch (error) {
    console.error("Erreur d'envoi email:", error);
    return { success: false };
  }
}