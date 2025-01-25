"use client";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { MobileNav } from "./MobileNav";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar";
import { Button } from "./ui/button";

const Navbar = () => {
  const user = useSession();
  const { data } = useSession();

  console.log("user", user);

  return (
    <div className="fixed bg-dark-1 w-full h-[72px]  px-4  flex justify-between z-30">
      <div className="flex items-center justify-center">
        <div className="relative w-10 h-10">
          <Image src="/png/videoIcon.png" alt="logo" fill />
        </div>
        <h1 className="font-bold text-2xl hidden md:block ">VACall</h1>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Menubar className="border-none">
          <MenubarMenu>
            <MenubarTrigger className="">
              <Avatar className="">
                <AvatarImage src={data?.user.image} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </MenubarTrigger>
            <MenubarContent className="bg-slate-800 border-none rounded-2xl shadow-lg">
              <MenubarItem>{data?.user?.name}</MenubarItem>
              <MenubarItem>{data?.user?.email}</MenubarItem>
              <MenubarSeparator className=" bg-white mx-2" />
              <MenubarItem>
                <Button
                  className="p-0 border-none ring-0 mx-auto my-0"
                  onClick={() => signOut()}
                >
                  sign Out
                </Button>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
