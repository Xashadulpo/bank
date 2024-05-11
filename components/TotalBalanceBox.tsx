import React from "react";
import AnimateAmmount from "./AnimateAmmount";
import DonartChart from "./DonartChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBank,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <div className="total-balance">
      <div className="total-balance-chart">
        <DonartChart accounts={accounts} />
      </div>
      {/* DETAIL  */}
      <div className="flex  flex-col gap-3">
        <h1 className="text-18 font-semibold text-gray-900">
          {totalBank} bank account
        </h1>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>

          <div className="total-balance-amount flex-center gap-2">
            <AnimateAmmount amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalBalanceBox;
