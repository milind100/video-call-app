"use client";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useSession } from "next-auth/react";
import { MobileNav } from "./MobileNav";

const Navbar = () => {
  const { data } = useSession();

  return (
    <div className="bg-dark-1 w-full h-[72px] flex items-center px-2 xsm:justify-end justify-between">
      <div className="relative w-10 h-10 xsm:hidden">
        <Image src="/png/videoIcon.png" alt="logo" fill />
      </div>
      <div className="flex items-center justify-center gap-3">
        <Avatar className="">
          <AvatarImage src={data?.user.image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
