import React, { useState } from "react";

const Home = () => {
    const [rangeval, setRangeval] = useState(0);
  const TransactionItem = ({ date, desc }) => {
    return (
      <div className=" py-4 border-b-2">
        <div className="text-xs text-[#adadad] font-semibold">{date}</div>
        <div className="font-semibold py-1 text-xs text-[#343434]">{desc}</div>
      </div>
    );
  };
  const RetirementIncome = ({ heading, value }) => {
    return (
      <div className="py-2 border-b-2 border-[#7263ff] flex-1">
        <div className=" font-bold text-xl">{value}</div>
        <div className="py-1 text-xs font-semibold text-[#adadad]">
          {heading}
        </div>
      </div>
    );
  };
  return (
    <div className=" h-full  flex ">
      <div className="bg-[#fafafa] p-6">
        <div className="h-full w-[20vw] ">
          <div className="flex gap-4 w-full px-4">
            <div className="h-16 w-16 bg-gray-600 rounded-full"></div>
            <div className="flex justify-center flex-col text-left">
              <div className="text-2xl font-bold text-[#343434]">Hi Mike,</div>
              <div className="font-semibold text-xs">welcome back.</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-7 pt-8 ">
            <div className=" font-bold text-lg text-[#343434]">Today</div>
            <div>
              <div className=" text-2xl font-bold text-[#343434]">19,892</div>
              <div className="text-xs py-1 text-[#adadad]">Account Balance</div>
            </div>
            <div>
              <div className="font-bold text-[#343434]">4,892</div>
              <div className="text-xs py-1  text-[#adadad]">
                Year-to-Date-Contrubutions
              </div>
            </div>
            <div>
              <div className="font-bold text-[#343434]">1,892</div>
              <div className="text-xs py-1  text-[#adadad]">Total Interest</div>
            </div>
            <button className=" bg-[#4935ff] h-10 w-32 rounded-lg flex items-center justify-center text-white">
              I want to
            </button>
          </div>
          <div className="pt-8 px-7 ">
            <div className="text-[#343434] font-bold text-base py-2">
              Recent Transaction
            </div>
            <TransactionItem
              date="2020-08-07"
              desc="Withdrawal Transfer to Bank-XXX11"
            />
            <TransactionItem
              date="2020-08-07"
              desc="Withdrawal Transfer to Bank-XXX11"
            />
            <TransactionItem
              date="2020-08-07"
              desc="Withdrawal Transfer to Bank-XXX11"
            />
          </div>
        </div>
      </div>

      <div className="text-[#343434] px-20 py-6 flex-1">
        <div className="pb-4">
          <div className="text-[#7263ff] font-bold text-sm">
            Retirement Income
          </div>
          <div className="font-semibold  text-xl">Starting Year 2056</div>
        </div>
        <div className="w-full flex gap-4">
          <RetirementIncome value="300,000" heading="My Goal" />
          <RetirementIncome value="59%" heading="Goal Achieved" />
          <RetirementIncome value="300,000" heading="Est. Monthly Income" />
        </div>
        <div className="py-8">
          <div className="font-bold">Contributions Overtime</div>
        </div>
      </div>
      <div className="w-[20vw] bg-[#fafafa]">
        <div>
            <input type="range" min={0} max={100} value={rangeval} onChange={(e)=>setRangeval(e.target.value)}></input>
            <div>{rangeval}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
