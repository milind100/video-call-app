import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navMenu } from "@/constant";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileNav() {
  const pathname = usePathname();
  return (
    <section className="xsm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu color="#0E78F9" strokeWidth={3} size={35} />
        </SheetTrigger>
        <SheetContent side="left" className="bg-dark-1 border-none">
          <SheetHeader>
            <SheetTitle className="flex items-center mx-5">
              <div className="relative w-12 h-12">
                <Image src="/png/videoIcon.png" alt="logo" fill />
              </div>
              <span className="font-bold text-2xl">VACall</span>
            </SheetTitle>
          </SheetHeader>

          <SheetDescription>
            <div className="flex flex-col gap-6 mt-14">
              {navMenu.map(({ title, url, icon }) => {
                const isActive = pathname === url;

                return (
                  <SheetClose key={title} asChild>
                    <Link
                      href={url}
                      className={cn(
                        "flex items-center p-4 gap-4 mx-3 rounded-2xl transition-all",
                        isActive
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-700"
                      )}
                    >
                      <div className="relative w-5 h-5">
                        <Image src={icon} alt={title} fill />
                      </div>
                      <span className="text-[18px] font-[600] ">{title}</span>
                    </Link>
                  </SheetClose>
                );
              })}
            </div>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </section>
  );
}
