import MobileBar from "@/components/MobileBar";
import SideBar from "@/components/SideBar";
import Image from "next/image";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen w-full flex font-inter max-md:flex-col ">
      <SideBar />
      <div className=" w-full flex justify-between px-8 py-4 items-center md:hidden">
        <div className="image-container">
        <Image
          src="/icons/logo.svg"
          width={34}
          height={34}
          alt="horizon logo"
          className="size-[24px] max-xl:size-14"
        />
        </div>
        <MobileBar />
      </div>
      {children}
    </main>
  );
}
