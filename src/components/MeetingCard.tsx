import Image from "next/image";
import React from "react";

interface cardTypes {
  iconPath: string;
  cardColor: string;
  title: string;
  subtitle: string;
  onClick: () => void;
}

const MeetingCard = ({
  iconPath,
  cardColor,
  title,
  subtitle,
  onClick,
}: cardTypes) => {
  return (
    <div
      className={`p-5 rounded-xl cursor-pointer`}
      style={{
        background: cardColor,
      }}
      onClick={onClick}
    >
      <div className="h-12 w-12 bg-white bg-opacity-20 flex justify-center items-center rounded-xl ">
        <div className="relative h-7 w-7">
          <Image src={iconPath} alt="Icon" fill />
        </div>
      </div>
      <h3 className="mt-24 font-bold text-2xl">{title}</h3>
      <h4 className="mt-1 text-[18px] font-[400]">{subtitle}</h4>
    </div>
  );
};

export default MeetingCard;
