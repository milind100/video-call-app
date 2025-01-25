import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

const useGetCallByID = (id: string | string[] | undefined) => {
  const [isCallLoading, setIsCallLoading] = useState(false);
  const [call, setCall] = useState<Call>();
  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client) return;

    const getCall = async () => {
      setIsCallLoading(true);
      try {
        const { calls } = await client.queryCalls({
          filter_conditions: { id },
        });
        console.log("calls :>> ", calls);
        if (calls.length > 0) setCall(calls[0]);

        setIsCallLoading(false);
      } catch (error) {
        console.error(error);
        setIsCallLoading(false);
      }
    };
    if (!call) getCall();
  }, [client, id]);

  return { call, isCallLoading };
};

export default useGetCallByID;
