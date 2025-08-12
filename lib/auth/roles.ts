export type Role = "admin" | "editor" | "viewer"

export function hasRequiredRole(userRole: Role | undefined, required: Role | Role[]): boolean {
  if (!userRole) return false
  const list = Array.isArray(required) ? required : [required]
  const weight: Record<Role, number> = { viewer: 1, editor: 2, admin: 3 }
  // Allow if user's role weight >= min required role weight
  const min = Math.min(...list.map((r) => weight[r]))
  return weight[userRole] >= min
}
