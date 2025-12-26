"use client";

import { useState } from "react";
import { CheckCircle2, Lock, Mail } from "lucide-react";
// Importe tes composants UI (Button, Input, Card, etc.)
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createLead } from "@/lib/actions";

export default function JoinForm() {
  const [isPending, setIsPending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setError(null);

    // On récupère les données du formulaire
    const formData = new FormData(e.currentTarget);

    try {
      // Appel de ton Action Server
      const result = await createLead(formData);

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setError(result.error || "Une erreur est survenue.");
      }
    } catch (err) {
      setError("Impossible de rejoindre la team pour le moment.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section id="join-form" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Reçois ton accès maintenant</h2>
          <p className="text-slate-500">Rejoins le groupe privé. Commence ta transformation ce soir.</p>
        </div>

        <Card className="shadow-2xl shadow-indigo-200/40 border-slate-200 transition-all duration-500 ease-in-out">
          <CardContent className="p-8 md:p-10">
            {!isSubmitted ? (
              /* FORMULAIRE ACTIF */
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Prénom</label>
                    <Input name="prenom" placeholder="Ton prénom" className="h-12 bg-slate-50" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Nom</label>
                    <Input name="nom" placeholder="Ton nom" className="h-12 bg-slate-50" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <Input name="email" type="email" placeholder="ton.email@gmail.com" className="h-12 bg-slate-50" required />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" required id="consent" className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                  <label htmlFor="consent" className="text-sm text-slate-500">
                    J'accepte de recevoir mes conseils sportifs par email. Pas de spam, promis.
                  </label>
                </div>

                <Button 
                  type="submit" 
                  disabled={isPending}
                  size="lg" 
                  className="w-full h-14 text-lg bg-indigo-600 hover:bg-indigo-700 font-bold shadow-lg shadow-indigo-200/50"
                >
                  {isPending ? "TRAITEMENT EN COURS..." : "DÉBLOQUER MON ACCÈS GRATUIT"}
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                  <Lock className="h-3 w-3" />
                  <span>Tes données sont 100% sécurisées.</span>
                </div>
              </form>
            ) : (
              /* MESSAGE DE SUCCÈS (Le "Retournement") */
              <div className="py-10 text-center animate-in fade-in zoom-in duration-500">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Bienvenue dans la Team SUAPS !</h3>
                <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                  Ton inscription est validée. On vient de t'envoyer ton guide par mail.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-indigo-600 font-medium bg-indigo-50 py-3 px-4 rounded-full w-fit mx-auto">
                  <Mail className="h-4 w-4" />
                  <span>Vérifie tes Spams si besoin</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}