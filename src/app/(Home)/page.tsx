"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  console.log("session", session);
  return (
    <div>
      <h1>HOme</h1>
      <Button onClick={() => signOut()}>sign Out</Button>
    </div>
  );
}
