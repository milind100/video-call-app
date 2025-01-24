import Image from "next/image";
import React from "react";

const LogoComponent = () => {
  return (
    <div className="flex  items-center ">
      <Image src="/png/videoIcon.png" alt="logo" height={40} width={40} />
      <h1 className="font-bold text-2xl">VACall</h1>
    </div>
  );
};

export default LogoComponent;
