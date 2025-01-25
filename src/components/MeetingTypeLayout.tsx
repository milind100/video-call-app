"use client";
import React, { useState } from "react";
import MeetingCard from "./MeetingCard";
import { HomeDialogue } from "./HomeDialogue";
import { HomeDialogueState } from "@/types/HomeMoodle";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useSession } from "next-auth/react";
import { LoaderIcon } from "lucide-react";

const instantMeet = "instantMeeting";
const joinMeeting = "JoinMeeting";
const scheduleMeeting = "scheduleMeeting";

const MeetingTypeLayout: React.FC = () => {
  const [dialogueState, setDialogueState] = useState<HomeDialogueState>(false);
  // const [call, setCall] = useState<StreamCallEvent>();
  const [isLoading, setIsLoading] = useState(false);

  const client = useStreamVideoClient();
  const { data } = useSession();

  const router = useRouter();

  const handleCardClick = (type: HomeDialogueState) => {
    setDialogueState(type);
  };

  const handleOpenChange = () => {
    if (isLoading) return;
    setDialogueState(false); // Adjust the state logic based on your needs
  };

  const handleCreateInstantMeeting = async () => {
    if (!client || !data || !data?.user) return;
    setIsLoading(true);
    try {
      const callType = "default";

      const callId = crypto.randomUUID();

      const call = client?.call(callType, callId);

      await call.getOrCreate({
        data: {
          starts_at: new Date(Date.now()).toISOString(),
          custom: {
            name: data?.user?.name,
            id: String(data?.user?.id),
            description: "instant Meeting",
          },
        },
      });

      router.push(`/meeting/${call?.id}`);
    } catch (error) {
      console.log("something went wrong try again", error);
      // or create it with options:
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <MeetingCard
          iconPath="/svg/room.svg"
          cardColor="#FF742E"
          title="New Meeting"
          subtitle="Setup a new recording"
          onClick={() => handleCardClick(instantMeet)}
        />
        <MeetingCard
          iconPath="/svg/addUser.svg"
          cardColor="#0E78F9"
          title="Join Meeting"
          subtitle="via invitation link"
          onClick={() => handleCardClick(joinMeeting)}
        />
        <MeetingCard
          iconPath="/svg/calendar.svg"
          cardColor="#830EF9"
          title="Schedule Meeting"
          subtitle="Plan your meeting"
          onClick={() => handleCardClick(scheduleMeeting)}
        />
        <MeetingCard
          iconPath="/svg/video.svg"
          cardColor="#F9A90E"
          title="View Recordings"
          subtitle="Meeting recordings"
          onClick={() => router.push("/recordings")} // Example: resets state
        />
      </div>
      <HomeDialogue
        isOpen={!!dialogueState}
        handleOpenChange={handleOpenChange}
        title={"Start Instant Meeting"}
      >
        <div className="flex  flex-col mt-3 gap-4">
          <Button
            className="bg-blue-500 rounded-sm hover:bg-blue-600"
            onClick={handleCreateInstantMeeting}
            disabled={isLoading}
          >
            Join {isLoading && <LoaderIcon className="animate-spin" />}
          </Button>
          <Button
            className="bg-dark-2"
            onClick={handleOpenChange}
            disabled={isLoading}
          >
            Cancel
          </Button>
        </div>
      </HomeDialogue>
    </div>
  );
};

export default MeetingTypeLayout;
