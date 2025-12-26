'use client'

import { Card } from '@/components/ui/card'
import { TrendingUp, Users, Mail } from 'lucide-react'

interface Stats {
  totalVisits: number
  totalLeads: number
  leads: Array<{
    id: string
    prenom: string
    nom: string
    email: string
    createdAt: Date
  }>
  visitsPerDay: Array<{
    date: string
    count: number
  }>
}

export default function AdminDashboard({ stats }: { stats: Stats }) {
  const conversionRate = stats.totalVisits > 0 
    ? ((stats.totalLeads / stats.totalVisits) * 100).toFixed(1)
    : '0'

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Visiteurs</p>
              <p className="text-3xl font-bold">{stats.totalVisits}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Leads</p>
              <p className="text-3xl font-bold">{stats.totalLeads}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Conversion</p>
              <p className="text-3xl font-bold">{conversionRate}%</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Évolution des visites (30 derniers jours)</h3>
        <div className="h-64 flex items-end gap-2">
          {stats.visitsPerDay.slice(0, 30).reverse().map((day, i) => {
            const maxCount = Math.max(...stats.visitsPerDay.map(d => d.count))
            const height = maxCount > 0 ? (day.count / maxCount) * 100 : 0
            
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-accent rounded-t" style={{ height: `${height}%` }} />
                <span className="text-xs text-muted-foreground rotate-45 origin-left">
                  {day.date.split('-').slice(1).join('/')}
                </span>
              </div>
            )
          })}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Derniers leads</h3>
        <div className="space-y-3">
          {stats.leads.map((lead) => (
            <div key={lead.id} className="flex items-center justify-between p-3 bg-secondary/50 rounded">
              <div>
                <p className="font-semibold">{lead.prenom} {lead.nom}</p>
                <p className="text-sm text-muted-foreground">{lead.email}</p>
              </div>
              <p className="text-sm text-muted-foreground">
                {new Date(lead.createdAt).toLocaleDateString('fr-FR')}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}