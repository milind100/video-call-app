"use server";
import { StreamClient } from "@stream-io/node-sdk";

const STREAM_API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY!;
const STREAM_API_SECRET = process.env.STREAM_SECRET_KEY!;

export const tokenProvider = async (userId: string) => {
  console.log("userrrrr", userId);
  if (!userId) throw new Error("User is not authenticated");
  if (!STREAM_API_KEY) throw new Error("Stream API key secret is missing");
  if (!STREAM_API_SECRET) throw new Error("Stream API secret is missing");

  const client = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);

  const expirationTime = Math.floor(Date.now() / 1000) + 3600;
  const issuedAt = Math.floor(Date.now() / 1000) - 60;

  const token = client.generateUserToken({
    user_id: userId,
    exp: expirationTime,
    validity_in_seconds: issuedAt,
  });
  return token;
};
