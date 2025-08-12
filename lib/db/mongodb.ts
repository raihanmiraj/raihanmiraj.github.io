import { MongoClient, type Db } from "mongodb"
 
const uri = process.env.MONGODB_URI || ""

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!uri) {
  // Still export a rejected promise to avoid undefined
  clientPromise = Promise.reject(new Error("MONGODB_URI is not set"))
} else {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri)
      global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
  } else {
    client = new MongoClient(uri)
    clientPromise = client.connect()
  }
}

export async function getDb(): Promise<Db> {
  const c = await clientPromise
  const dbName = process.env.MONGODB_DB || "portfolio"
  return c.db(dbName)
}
