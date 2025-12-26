/* eslint-disable react/no-unescaped-entities */
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Download, MessageCircle, CheckCircle } from 'lucide-react'

export default function MerciPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-accent" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bienvenue dans La Méthode SUAPS !
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12">
          Ton guide t'attend. Prêt à transformer ton corps ?
        </p>

        <div className="space-y-4">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Étape 1 : Télécharge ton guide</h2>
            <Button className="w-full h-14 text-lg bg-accent hover:bg-accent/90">
              <Download className="mr-2" />
              Télécharger le Guide PDF
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Étape 2 : Réserve ton bilan gratuit</h2>
            <p className="text-muted-foreground mb-4">
              15 minutes pour analyser tes objectifs et créer ton plan personnalisé
            </p>
            <Button
              variant="outline"
              className="w-full h-14 text-lg"
              onClick={() => window.open('https://wa.me/33XXXXXXXXX', '_blank')}
            >
              <MessageCircle className="mr-2" />
              Réserver sur WhatsApp
            </Button>
          </Card>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          Tu vas recevoir un email de confirmation avec tous les liens
        </p>
      </motion.div>
    </main>
  )
}