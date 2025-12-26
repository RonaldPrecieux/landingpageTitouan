"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, 
  ChevronDown, 
  Dumbbell, 
  Activity, 
  Play, 
  Lock, 
  ArrowRight, 
  Flame,
  Trophy,
  Star,
  Menu,
  X
} from "lucide-react";
import JoinForm from "@/components/LeadForm";

/* --- 🛠️ SHADCN UI SIMULATED COMPONENTS (INLINE) --- */

const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(" ");

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" | "secondary" | "ghost" | "link"; size?: "default" | "sm" | "lg" | "icon" }>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variant === "default" && "bg-slate-900 text-slate-50 hover:bg-slate-900/90",
          variant === "secondary" && "bg-slate-100 text-slate-900 hover:bg-slate-100/80",
          variant === "outline" && "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
          variant === "ghost" && "hover:bg-slate-100 hover:text-slate-900",
          size === "default" && "h-10 px-4 py-2",
          size === "sm" && "h-9 rounded-md px-3",
          size === "lg" && "h-11 rounded-md px-8",
          size === "icon" && "h-10 w-10",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

const Badge = ({ className, variant = "default", ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "secondary" | "outline" | "destructive" }) => {
  return (
    <div className={cn(
      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      variant === "default" && "border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80",
      variant === "secondary" && "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80",
      variant === "destructive" && "border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80",
      variant === "outline" && "text-slate-950 border-slate-200",
      className
    )} {...props} />
  );
};

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm", className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

/* --- 🚀 PAGE COMPONENT --- */

export default function SuapsMethodPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const scrollToForm = () => {
    document.getElementById("join-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-950">
      
      {/* HEADER / NAV */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <Activity size={18} />
            </div>
            <span>Titouan BodyFit</span>
          </div>
          <Button onClick={scrollToForm} size="sm" className="bg-indigo-600 hover:bg-indigo-700 font-semibold">
            Accès Étudiant
          </Button>
        </div>
      </header>

      {/* 1. HERO SECTION (Split Layout + Visual Impact) */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <Badge variant="outline" className="w-fit border-indigo-200 bg-indigo-50 text-indigo-700 px-3 py-1">
                <Check className="mr-1 h-3 w-3" /> Programme Officiel - Coach Responsable SUAPS
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Arrête de stagner. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                  Active la Science.
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Gagne <strong>2 kg de muscle pur</strong> ou perds <strong>3 cm de tour de taille</strong> en 6 semaines. Utilise enfin les machines de la salle SUAPS intelligemment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Button size="lg" onClick={scrollToForm} className="bg-indigo-600 hover:bg-indigo-700 text-lg h-14 px-8 shadow-lg shadow-indigo-200">
                  Recevoir mon Programme Gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-slate-500 mt-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i} 
                      src={`https://images.unsplash.com/photo-${i === 1 ? '1534438327276-14e5300c3a48' : i === 2 ? '1507398941214-572c25f4b1dc' : '1506794778202-cad84cf45f1d'}?auto=format&fit=crop&w=100&h=100&q=80`} 
                      className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                      alt="Student"
                    />
                  ))}
                </div>
                <p>Déjà <span className="font-bold text-slate-900">+450 étudiants</span> inscrits cette année.</p>
              </div>
            </motion.div>

            {/* Right Image (Hero Visual) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative lg:h-[600px] w-full"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Athlète SUAPS Musculation" 
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                />
                {/* Floating Card UI */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-xl border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <TrendingUpIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Résultats Prouvés</p>
                      <p className="text-sm text-slate-500">Basé sur la biomécanique</p>
                    </div>
                    <div className="ml-auto font-bold text-indigo-600 text-xl">+15%</div>
                  </div>
                </div>
              </div>
              {/* Decorative Blob */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 blur-[100px] rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. VISUAL PROOF GRID (Inspiration) */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
         <div className="container mx-auto px-4 max-w-7xl">
            <p className="text-center text-slate-500 font-medium mb-8 uppercase tracking-widest text-xs">Le physique que tu peux atteindre avec la méthode SUAPS</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=800&q=80"
              ].map((src, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md group"
                >
                   <img src={src} alt="Resultat musculation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-bold text-sm">Objectif Atteint</span>
                   </div>
                </motion.div>
              ))}
            </div>
         </div>
      </section>

      {/* 3. PROBLEM / PAIN POINTS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi tu stagnes malgré tes efforts ?</h2>
            <p className="text-lg text-slate-500">Tu viens à la salle SUAPS, tu transpires, mais le miroir ne change pas.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             <Card className="border-0 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow bg-slate-50">
               <CardHeader>
                 <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4">
                   <AlertCircleIcon className="h-6 w-6" />
                 </div>
                 <h3 className="text-xl font-bold">L'Exécution "au feeling"</h3>
               </CardHeader>
               <CardContent>
                 <p className="text-slate-600">Tu pousses des charges, mais tu ne cibles pas le muscle. Résultat : tu te fatigues les articulations sans stimuler la croissance.</p>
               </CardContent>
             </Card>

             <Card className="border-0 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow bg-slate-50">
               <CardHeader>
                 <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                   <Dumbbell className="h-6 w-6" />
                 </div>
                 <h3 className="text-xl font-bold">Le Programme "Instagram"</h3>
               </CardHeader>
               <CardContent>
                 <p className="text-slate-600">Tu copies les influenceurs dopés. Mais tu n'as pas leur génétique, ni leur pharmacie. Il te faut une méthode adaptée.</p>
               </CardContent>
             </Card>

             <Card className="border-0 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow bg-slate-50">
               <CardHeader>
                 <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                   <Activity className="h-6 w-6" />
                 </div>
                 <h3 className="text-xl font-bold">L'Inconstance</h3>
               </CardHeader>
               <CardContent>
                 <p className="text-slate-600">Sans plan clair, tu perds la motivation. Tu viens 3 fois cette semaine, 0 la semaine prochaine. Le muscle ne pardonne pas.</p>
               </CardContent>
             </Card>
          </div>
        </div>
      </section>

      {/* 4. THE SOLUTION (Coach Authority) */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
             <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Background Gym" />
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <Badge variant="secondary" className="bg-indigo-500 text-white border-none">Expertise SUAPS</Badge>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Je suis Titouan Gay.<br/>
                  <span className="text-indigo-400">Ton Coach.</span>
                </h2>
                <div className="space-y-6 text-slate-300 text-lg">
                  <p>
                    En tant que responsable de la salle SUAPS, je vois chaque jour des centaines d'étudiants faire les mêmes erreurs.
                  </p>
                  <p>
                    J'ai conçu cette méthode pour une seule raison : <strong>Optimiser ton temps</strong>. Tu es étudiant, tu n'as pas 2h par jour à perdre. Tu veux des résultats, vite et proprement.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                    <Trophy className="h-6 w-6 text-yellow-400 mb-2" />
                    <p className="font-bold text-white">Certifié</p>
                    <p className="text-xs text-slate-400">Préparateur Physique</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                    <Flame className="h-6 w-6 text-orange-400 mb-2" />
                    <p className="font-bold text-white">Spécialiste</p>
                    <p className="text-xs text-slate-400">Hypertrophie Naturelle</p>
                  </div>
                </div>
             </div>

             <div className="relative">
                <div className="relative z-10 bg-white p-2 rounded-2xl rotate-3 shadow-2xl">
                  <img 
                    src="Titouan1.jpg" 
                    alt="Coach Titouan" 
                    className="rounded-xl w-full h-auto object-cover aspect-[4/5] transition-all duration-500"
                  />

                  <div className="absolute bottom-6 left-6 bg-slate-900 text-white px-4 py-2 rounded-lg font-bold">
                    Titouan Gay
                  </div>
                </div>
                <div className="absolute top-10 right-10 w-full h-full border-2 border-indigo-500 rounded-2xl -z-0 translate-x-4 translate-y-4" />
             </div>
          </div>
        </div>
      </section>

      {/* 5. LEAD MAGNET SHOWCASE */}
      <section className="py-24 bg-indigo-50/50">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl shadow-indigo-100 border border-indigo-100 flex flex-col md:flex-row gap-12 items-center">
              
              <div className="flex-1 space-y-8">
                 <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-none px-4 py-1.5 text-sm">Offert Gratuitement</Badge>
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Le Guide de Démarrage Rapide SUAPS</h2>
                 <p className="text-slate-600 text-lg">
                   Ne perds plus une seule séance. Télécharge le plan d'action que j'utilise avec mes athlètes privés.
                 </p>
                 
                 <ul className="space-y-4">
                   {[
                     "Les 3 exercices rois disponibles à la salle SUAPS",
                     "Le format de répétitions exact pour l'hypertrophie",
                     "Vidéo privée : Correction technique en direct"
                   ].map((item, idx) => (
                     <li key={idx} className="flex items-start gap-3">
                       <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600">
                         <Check className="h-4 w-4" />
                       </div>
                       <span className="font-medium text-slate-800">{item}</span>
                     </li>
                   ))}
                 </ul>
              </div>

              <div className="flex-1 relative w-full flex justify-center">
                 {/* Visual Mockup */}
                 <div className="relative w-64 md:w-80 aspect-[9/16] bg-slate-900 rounded-[2.5rem] border-8 border-slate-800 shadow-2xl overflow-hidden flex flex-col">
                    {/* Phone Screen */}
                    <div className="flex-1 bg-white relative overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=600&q=80" className="absolute inset-0 w-full h-full object-cover opacity-90" alt="App Content" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                          <span className="text-xs font-bold text-indigo-400 uppercase">Vidéo Exclusive</span>
                          <span className="text-white font-bold text-xl leading-tight">La Méthode SUAPS : Module 1</span>
                          <div className="mt-4 w-12 h-12 bg-white rounded-full flex items-center justify-center pl-1 cursor-pointer">
                             <Play className="h-5 w-5 fill-slate-900 text-slate-900" />
                          </div>
                       </div>
                    </div>
                 </div>
                 {/* Floating PDF Badge */}
                 <div className="absolute top-10 -right-4 md:-right-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-bounce duration-1000">
                    <div className="flex items-center gap-3">
                       <div className="bg-red-100 p-2 rounded text-red-600 font-bold text-xs">PDF</div>
                       <div className="text-sm font-bold text-slate-900">Programme <br/>Complet</div>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* 6. FORM SECTION (Bottom Funnel) */}
    <JoinForm />

      {/* 7. FAQ (Simple Accordion) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-2xl">
           <h2 className="text-2xl font-bold text-center mb-10">Questions Fréquentes</h2>
           <div className="space-y-4">
             {[
               { q: "Est-ce vraiment gratuit ?", a: "Oui. C'est ma contribution à la vie étudiante du SUAPS. Je veux voir de vrais niveaux à la salle." },
               { q: "J'ai peur de mal faire les mouvements...", a: "Justement, la vidéo incluse te montre l'exécution parfaite pour éviter les blessures et cibler le muscle." },
               { q: "C'est pour les garçons ou les filles ?", a: "La physiologie musculaire est la même. Le programme s'adapte à ta charge, quel que soit ton genre." }
             ].map((item, i) => (
               <div key={i} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                 <button 
                   onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                   className="w-full flex items-center justify-between p-4 font-medium text-left hover:bg-slate-50"
                 >
                   {item.q}
                   <ChevronDown className={cn("h-4 w-4 transition-transform", activeFaq === i && "rotate-180")} />
                 </button>
                 <AnimatePresence>
                   {activeFaq === i && (
                     <motion.div 
                       initial={{ height: 0, opacity: 0 }} 
                       animate={{ height: "auto", opacity: 1 }} 
                       exit={{ height: 0, opacity: 0 }}
                     >
                       <div className="p-4 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2">
                         {item.a}
                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="container mx-auto px-4 text-center">
           <div className="flex justify-center items-center gap-2 mb-4 text-white font-bold text-xl">
              <Activity className="h-6 w-6" />
              <span>Titouan BodyFit</span>
           </div>
           <p className="text-sm mb-8">La science au service de ta performance musculaire.</p>
           <p className="text-xs opacity-50">&copy; {new Date().getFullYear()} Titouan Gay. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

/* --- ICONS HELPER --- */
function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function AlertCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  );
}