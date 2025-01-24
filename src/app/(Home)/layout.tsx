import { MobileNav } from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <section className="flex flex-row">
        <div className="max-xsm:hidden">
          <Sidebar />
        </div>
        <div className="w-full">
          <Navbar />
          {children}
        </div>
      </section>
    </main>
  );
};

export default HomeLayout;
