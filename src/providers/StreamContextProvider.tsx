"use client";

import React, { ReactNode } from "react";

import { useEffect, useState } from "react";
import {
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";
import { useSession } from "next-auth/react";
import { tokenProvider } from "@/actions/getStreamToken";

const STREAM_API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY!;

const StreamContextProvider = ({ children }: { children: ReactNode }) => {
  const { data, status } = useSession();

  const [client, setClient] = useState<StreamVideoClient>();

  useEffect(() => {
    if (status === "loading" || !data || !STREAM_API_KEY) return;
    if (!tokenProvider) return;
    const createClient = async () => {
      try {
        const token = await tokenProvider(data?.user?.id);
        const user: User = {
          id: String(data?.user?.id),
          name: String(data?.user?.name),
          image: String(data?.user?.image),
          type: "authenticated",
        };

        const myClient = new StreamVideoClient({
          apiKey: STREAM_API_KEY,
          token,
          user,
        });

        setClient(myClient);
      } catch (error) {
        console.log("error", error);
      }
    };

    createClient();
    // return () => {
    //   client?.disconnectUser();
    //   setClient(undefined);
    // };
  }, [data, status]);
  // if (!client) return <>{children}</>;
  if (!client) return null;

  return <StreamVideo client={client}>{children}</StreamVideo>;
};

export default StreamContextProvider;
