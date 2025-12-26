'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Lucas M.',
    result: '+3 kg de muscle',
    text: 'Je comprends enfin pourquoi je stagnais. Les explications sont claires et les résultats sont là.',
  },
  {
    name: 'Sarah B.',
    result: '-4 cm de tour de taille',
    text: "Programme scientifique et efficace. J'ai atteint mes objectifs en respectant mes études.",
  },
  {
    name: 'Thomas R.',
    result: '+15% de force',
    text: 'La méthode est basée sur la science. Ça change tout par rapport aux conseils trouvés sur internet.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Ils ont transformé leur corps
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="mb-4">
                  <p className="font-bold text-lg">{t.name}</p>
                  <p className="text-accent font-semibold">{t.result}</p>
                </div>
                <p className="text-muted-foreground">{t.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 italic">
          Témoignages illustratifs - Résultats variables selon engagement
        </p>
      </div>
    </section>
  )
}