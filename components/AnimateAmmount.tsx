"use client";
import CountUp from "react-countup";

const AnimateAmmount = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full text-18 font-extrabold text-gray-900">
      <CountUp prefix="$" end={amount} duration={1.75} separator="," />
    </div>
  );
};

export default AnimateAmmount;
