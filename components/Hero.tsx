'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6 text-sm px-4 py-2 bg-accent text-white">
            OFFRE LIMITÉE – ÉTUDIANTS SUAPS
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Gagne 2 kg de muscle<br />
            <span className="text-accent">en 6 semaines</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Ou perds 3 cm de tour de taille grâce à la science du sport
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative w-full max-w-2xl mx-auto aspect-video bg-black/5 rounded-lg mb-8 overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
              </div>
            </div>
          </motion.div>

          <p className="text-sm text-muted-foreground italic">
            Par le Responsable de la salle SUAPS – Expert terrain, pas influenceur
          </p>
        </motion.div>
      </div>
    </section>
  )
}