"use client";
import { Button } from "@/components/ui/button";
import useGetCallByID from "@/hooks/useGetCallByID";
import {
  Call,
  CallControls,
  PaginatedGridLayout,
  StreamCall,
  StreamTheme,
  useStreamVideoClient,
} from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import MeetingSetup from "./MeetingSetup";
import MeetingRoom from "./MeetingRoom";

const MeetingPage = () => {
  const { callId } = useParams();
  const { call, isCallLoading } = useGetCallByID(callId);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if (isCallLoading) return <div className="w-full h-full">loading.......</div>;

  if (!call)
    return (
      <p className="text-center text-3xl font-bold text-white">
        Call Not Found
      </p>
    );

  const handleJoinCall = () => {
    call?.join();
  };

  return (
    <div>
      <StreamCall call={call}>
        <StreamTheme>
          {isSetupComplete ? (
            <MeetingRoom />
          ) : (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          )}
          {/* <Button onClick={handleJoinCall}>Join</Button>
          <section className="relative min-h-screen w-full overflow-hidden pt-4">
            <div className="relative flex size-full items-center justify-center">
              <div className="flex size-full max-w-[1000px] items-center"></div>
              <div className="fixed bottom-0 flex w-full items-center justify-center gap-5">
                <CallControls />
              </div>
            </div>
          </section> */}
        </StreamTheme>
      </StreamCall>
    </div>
  );
};

export default MeetingPage;
