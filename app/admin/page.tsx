import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function AdminHome() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-[#1E293B] border-none">
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <a href="/admin/posts" className="text-[#0A69DC] hover:underline">
              Manage Posts →
            </a>
            <a href="/admin/projects" className="text-[#0A69DC] hover:underline block">
              Manage Projects →
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
