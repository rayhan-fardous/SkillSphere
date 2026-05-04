import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

const client = new MongoClient(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/skillsphere",
);
const db = client.db("skill-sphere");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://skill-sphere-edu.vercel.app",
  trustedOrigins: [
    "https://skill-sphere-edu.vercel.app",
    "http://localhost:3000",
  ],
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});
