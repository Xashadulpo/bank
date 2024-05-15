"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const MobileBar = ({ user, type }: SideBarProps) => {
  const pathName = usePathname();
  return (
    <section className="max-w-[246px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="mobileBtn"
            width={33}
            height={32}
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-none w-full max-w-[400px] bg-white"
        >
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-1 px-4"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Horizon logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>
          {/* MOBILE NAV INTIGRATION  */}

          <SheetClose asChild>
            <div className="mt-14 ml-4 h-full flex  flex-col justify-between ">
              <div className="w-full flex flex-col gap-3">
                {sidebarLinks.map((items) => (
                  <SheetClose asChild key={items.label}>
                    <Link href={items.route}>
                      <div
                        className={`flex gap-3 p-4 items-center  rounded-[6px] ${
                          pathName === items.route
                            ? "active-link"
                            : "text-black-2"
                        }`}
                      >
                        <Image
                          src={items.imgURL}
                          alt={items.imgURL}
                          width={24}
                          height={24}
                          className={
                            pathName === items.route
                              ? "brightness-[3] invert-0"
                              : ""
                          }
                        />
                        <p className="text-16 font-semibold md:hidden">
                          {items.label}
                        </p>
                      </div>
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <div className="mb-32">
                <Footer user={user} type={type} />
              </div>
            </div>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileBar;
