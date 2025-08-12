import { cert, getApps, initializeApp } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"

const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID
const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL
let privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY

// In Vercel, the private key usually needs newline fixes
if (privateKey?.includes("\\n")) {
  privateKey = privateKey.replace(/\\n/g, "\n")
}

if (!getApps().length && projectId && clientEmail && privateKey) {
  initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  })
}

export const adminAuth = getAuth()
