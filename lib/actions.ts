// app/actions/lead.ts
"use server";

import { prisma } from "@/lib/prisma"; // Assure-toi d'avoir ton instance prisma ici
import { sendWelcomeEmail } from "@/lib/mailer";

export async function createLead(formData: FormData) {
  const prenom = formData.get("prenom") as string;
  const nom = formData.get("nom") as string;
  const email = formData.get("email") as string;
  const accepte = true;

  try {
    // 1. Sauvegarde en Base de données
    const newLead = await prisma.lead.create({
      data: { prenom, nom, email, accepte },
    });

    // 2. Envoi de l'email de bienvenue

    await sendWelcomeEmail(email, prenom);


    return { success: true };
  } catch (error) {
    console.error("Erreur Lead:", error);
    return { success: false, error: "Une erreur est survenue." };
  }
}