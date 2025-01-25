import MeetingTypeLayout from "@/components/MeetingTypeLayout";

export default function Home() {
  const date = new Date();
  const formattedDate = date.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Use 24-hour format (set to true for 12-hour format)
  });

  console.log("formattedTime", formattedTime.split(" ")[0]);
  return (
    <section className="flex size-full flex-col gap-8 text-white">
      <div className="bg-hero-pattern bg-cover bg-center  h-[303px] p-9 ">
        <span className="bg-white bg-opacity-15 p-2 rounded">
          Upcoming meeting at 12:30 PM
        </span>
        <h1 className=" mt-20 ">
          <span className=" text-[72px] font-[800]">
            {formattedTime.split(" ")[0]}
          </span>
          <span className="text-2xl"> {formattedTime.split(" ")[1]}</span>
        </h1>
        <span className="color-[#C9DDFF] text-2xl">{formattedDate}</span>
      </div>
      <MeetingTypeLayout />
    </section>
  );
}
