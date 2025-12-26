import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'La Méthode SUAPS - Transforme ton corps en 6 semaines',
  description: 'Gagne 2 kg de muscle ou perds 3 cm de tour de taille grâce à la science du sport',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}