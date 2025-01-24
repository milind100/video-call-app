"use client";

import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { navMenu } from "@/constant";

// This is sample data.

export function Sidebar() {
  const pathname = usePathname();

  return (
    <section className="bg-dark-1 h-screen md:w-[264px] pt-5">
      {/* Logo Section */}
      <div className="flex items-center mx-5">
        <div className="relative w-12 h-12">
          <Image src="/png/videoIcon.png" alt="logo" fill />
        </div>
        <h1 className="font-bold text-2xl hidden md:block">VACall</h1>
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-col gap-6 mt-14">
        {navMenu.map(({ title, url, icon }) => {
          const isActive = pathname === url;

          return (
            <Link
              href={url}
              key={title}
              className={cn(
                "flex items-center p-4 gap-4 mx-3 rounded-2xl transition-all",
                isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
              )}
            >
              <div className="relative w-5 h-5 max-md:mx-auto">
                <Image src={icon} alt={title} fill />
              </div>
              <h1 className="text-[18px] font-[600] hidden md:block">
                {title}
              </h1>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
