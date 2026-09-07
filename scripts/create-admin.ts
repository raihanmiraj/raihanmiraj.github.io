import dotenv from "dotenv";
import { connectToDatabase } from "../lib/db";
import bcrypt from "bcryptjs";
import { User } from "../models/User";

dotenv.config({ path: ".env.local" });
dotenv.config();

async function main(){
const email=process.env.ADMIN_EMAIL?.trim().toLowerCase();const password=process.env.ADMIN_PASSWORD;const name=process.env.ADMIN_NAME?.trim()||"Raihan Miraj";
if(!email||!password||password.length<12){console.error("Set ADMIN_EMAIL and ADMIN_PASSWORD (minimum 12 characters) before running this command.");process.exit(1)}
await connectToDatabase();const passwordHash=await bcrypt.hash(password,12);await User.findOneAndUpdate({email},{$set:{name,email,passwordHash,role:"admin"}}, {upsert:true,returnDocument:"after",setDefaultsOnInsert:true});console.log(`Admin ready: ${email}`);process.exit(0);}
main().catch(error=>{console.error(error instanceof Error?error.message:"Admin creation failed");process.exit(1)});
