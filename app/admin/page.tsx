//import { getStats } from '@/lib/actions'
import AdminDashboard from '@/components/AdminDashboard'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

export default async function AdminPage({
  searchParams,
}: {
  searchParams: { user?: string; pass?: string }
}) {
  const headersList = headers()
  const auth = searchParams.user === process.env.ADMIN_USERNAME && 
               searchParams.pass === process.env.ADMIN_PASSWORD

  if (!auth) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-4">
          <h1 className="text-2xl font-bold text-center">Admin - La Méthode SUAPS</h1>
          <form method="get" className="space-y-4">
            <input
              type="text"
              name="user"
              placeholder="Username"
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="password"
              name="pass"
              placeholder="Password"
              className="w-full p-3 border rounded"
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-accent text-white rounded font-semibold"
            >
              Connexion
            </button>
          </form>
        </div>
      </main>
    )
  }

  //const stats = await getStats()

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Dashboard Admin</h1>
        {/* <AdminDashboard stats={stats} /> */}
      </div>
    </main>
  )
}