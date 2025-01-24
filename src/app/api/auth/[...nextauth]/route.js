// @ts-nocheck

import db from "@/lib/firestore";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 Days
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        const userRef = doc(db, "users", user?.id);

        const userSnap = await getDoc(userRef);
        if (userSnap) {
          // console.log("userSnap", userSnap.data());
          return true;
        }

        // Set the document data
        await setDoc(userRef, {
          id: user?.id, // Optional: Save the ID explicitly if needed
          provider: account?.provider,
          name: user?.name,
          email: user?.email ?? "",
          image: user?.image,
        });

        return true;
      } catch (error) {
        console.log("error", error);
      }
    },

    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
