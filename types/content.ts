export type UserDoc = {
  uid: string
  email?: string | null
  name?: string | null
  photoURL?: string | null
  role: "admin" | "editor" | "viewer"
  createdAt: string
  updatedAt: string
}

export type Post = {
  _id?: string
  slug: string
  title: string
  excerpt?: string
  content: string // markdown
  coverImage?: string
  tags?: string[]
  published: boolean
  authorUid: string
  createdAt: string
  updatedAt: string
}

export type Project = {
  _id?: string
  slug: string
  title: string
  description: string
  content?: string // markdown for details page
  coverImage?: string
  tags?: string[]
  gradientFrom?: string
  gradientTo?: string
  links?: { github?: string; demo?: string }
  published: boolean
  createdAt: string
  updatedAt: string
}
