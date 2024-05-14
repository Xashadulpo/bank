import Link from "next/link";
import React from "react";
import BankCard from "./BankCard";

const RightSideBar = ({ user, transitions, banks }: RightSideBarProps) => {
  return (
    <div className="right-siderBar">
      {/* USER DETAIL  */}
      <section className="flex flex-col">
        <div className="bg-gradient-mesh bg-cover bg-no-repeat h-[120px] " />
        <div className="profile px-3 ">
          <div className="relative w-[96px] flex items-center justify-center h-[96px] -top-10 left-4 rounded-full border-4  border-white shadow-lg bg-gray-400">
            <p className="bg-gradient-to-r from-blue-500 text-5xl to-blue-700 capitalize font-extrabold text-transparent bg-clip-text">
              {user.name[0]}
            </p>
          </div>
          <h1 className="text-20 font-ibm-plex-serif lg:text-30 font-semibold text-gray-900">
            {user.name}
          </h1>
          <p className="mt-2 font-semibold text-gray-500">{user.email}</p>
        </div>
      </section>
    {/* CARD DETAIL  */}
    <section className="flex flex-col justify-center gap-3 mt-9 px-3">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-20 font-ibm-plex-serif font-semibold text-gray-900">My Banks</h3>
        <Link href="/" className="flex justify-center items-center gap-2">
          <h2 className="text-[#475467]"><span className="text-24"> +</span>  Add Bank</h2>
         
        </Link>
      </div>
      {banks.length > 0 && (
       <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
       <div className='relative z-10'>
         <BankCard 
         
           account={banks[0]}
           userName={user.name}
           showBalance={false}
         />
       </div>
       {banks[1] && (
         <div className="absolute right-0 top-8 z-0 w-[90%]">
           <BankCard 
             account={banks[1]}
             userName={user.name}
             showBalance={false}
           />
         </div>
       )}
     </div>
      )}
    </section>
    </div>
  );
};

export default RightSideBar;
