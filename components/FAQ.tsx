'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Pourquoi ce guide est-il gratuit ?',
    a: "C'est ma façon de prouver la qualité de ma méthode. Je veux que tu constates les résultats avant d'aller plus loin.",
  },
  {
    q: 'Est-ce adapté aux débutants ?',
    a: 'Absolument. Les exercices sont choisis pour leur efficacité et leur simplicité. Tout est expliqué étape par étape.',
  },
  {
    q: 'Combien de temps par semaine ?',
    a: '3 séances de 45 minutes suffisent. La méthode privilégie l\'intensité et la technique, pas la durée.',
  },
  {
    q: 'Que se passe-t-il après le téléchargement ?',
    a: 'Tu reçois le guide immédiatement. Tu peux aussi réserver un bilan gratuit pour un accompagnement personnalisé.',
  },
]

export default function FAQ() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Questions fréquentes
        </motion.h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}