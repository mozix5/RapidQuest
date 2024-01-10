import React, { useState } from "react";
import CustomBarChart from "../components/CustomBarChart";
import CircularProgress from "../components/CircularProgress";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

const Home = () => {
  const [slider1, setSlider1] = useState(0);
  const [slider2, setSlider2] = useState(0);

  const TransactionItem = ({ date, desc }) => {
    return (
      <div className=" py-4 border-b-2">
        <div className="text-xs text-[#adadad] font-semibold">{date}</div>
        <div className={`py-1 ${baseText}`}>{desc}</div>
      </div>
    );
  };
  const RetirementIncome = ({ heading, value }) => {
    return (
      <div className="py-2 border-b-2 border-[#7263ff] flex-1">
        <div className={` text-xl ${numericStyle}`}>{value}</div>
        <div className={`${lightText} py-1`}>{heading}</div>
      </div>
    );
  };

  const numericStyle = "text-[#343434] font-nunito";
  const headingText = "text-[#343434] font-bitter";
  const subHeadingText = "text-[#343434] font-bitter text-sm";
  const lightText = "text-xs font-semibold text-[#adadad]";
  const baseText = "text-[#343434] text-xs font-bold";

  const slider1Background = {
    background: `linear-gradient(to right, #73a4ff ${slider1}%, #ececec ${slider1}%)`,
  };
  const slider2Background = {
    background: `linear-gradient(to right, #73a4ff ${slider2}%, #ececec ${slider2}%)`,
  };

  return (
    <div className=" h-full  flex pr-[3vw]">
      <div className="bg-[#fafafa] p-6">
        <div className="h-full w-[20vw] ">
          <div className="flex gap-4 w-full px-4">
            <div className="h-16 w-16 bg-gray-600 rounded-full"></div>
            <div className="flex justify-center flex-col text-left">
              <div className={` text-2xl ${headingText}`}>Hi Mike,</div>
              <div className="font-semibold text-xs">welcome back.</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-7 pt-8 ">
            <div className={` text-lg ${headingText}`}>Today</div>
            <div>
              <div className={` text-2xl ${numericStyle}`}>19,892</div>
              <div className={`py-1 ${lightText}`}>Account Balance</div>
            </div>
            <div>
              <div className={` ${numericStyle}`}>4,892</div>
              <div className={`py-1 ${lightText}`}>
                Year-to-Date-Contrubutions
              </div>
            </div>
            <div>
              <div className={` ${numericStyle}`}>1,892</div>
              <div className={`py-1 ${lightText}`}>Total Interest</div>
            </div>
            <button className=" bg-[#4935ff] h-10 w-32 rounded-lg flex items-center justify-center text-white">
              I want to
            </button>
          </div>
          <div className="pt-8 px-7 ">
            <div className={`py-2 ${headingText}`}>Recent Transaction</div>
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
          <div className="text-[#7263ff] font-bitter text-sm">
            Retirement Income
          </div>
          <div className={` text-xl ${headingText}`}>Starting Year 2056</div>
        </div>
        <div className="w-full flex gap-4">
          <RetirementIncome value="300,000" heading="My Goal" />
          <RetirementIncome value="59%" heading="Goal Achieved" />
          <RetirementIncome value="300,000" heading="Est. Monthly Income" />
        </div>
        <div className="py-8">
          <div className={`${headingText}`}>Contributions Overtime</div>
          <CustomBarChart />
        </div>
        <div className="pt-12">
          <div className={`${headingText}`}>How do I compare to my peers?</div>
          <div className={`${lightText} py-2 `}>
            These numbers represent current goal achievement
          </div>
          <div className="grid grid-flow-col-dense grid-cols-5 items-center">
            <div
              className={`${baseText} col-span-2 [&>*]:py-2 [&>*]:flex [&>*]:items-center [&>*]:gap-1`}
            >
              <div>
                <span>Age: Under 30</span> <IoMdArrowDropdown />
              </div>
              <div>
                <span>Salary: K 20-K 30</span> <IoMdArrowDropdown />
              </div>
              <div>
                <span>Gender: Male</span> <IoMdArrowDropdown />
              </div>
            </div>
            <CircularProgress progress={75} />
            <CircularProgress progress={95} />
            <CircularProgress progress={59} />
          </div>
        </div>
      </div>

      {/* Strategy Section */}

      <div className="w-[20vw] bg-[#fafafa] ">
        <div className={`${headingText} text-lg p-6`}>Retirement Strategy</div>
        <div className="px-6 ">
          <div className=" border-b-2 pb-5">
            <div className="">
              <div className={`${headingText} text-sm py-4`}>
                Employee Contributions
              </div>
              <div className="flex items-center justify-between">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={slider1}
                  style={slider1Background}
                  onChange={(e) => setSlider1(e.target.value)}
                ></input>
                <div className="pb-1">{slider1}</div>
              </div>
            </div>
            <div className="">
              <div className={`${headingText} text-sm py-4`}>
                Employee Contributions
              </div>
              <div className="flex items-center justify-between">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={slider2}
                  style={slider2Background}
                  onChange={(e) => setSlider2(e.target.value)}
                ></input>
                <div className="pb-1">{slider2}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center">
            <div className={`py-1 flex-1 ${subHeadingText}`}>
              Employer Contribution
            </div>
            <div>12%</div>
          </div>
          <div className="flex items-center">
            <div className={`py-1 flex-1  ${subHeadingText}`}>
              Interest Rate
            </div>
            <div>5%</div>
          </div>
          <button className=" bg-[#4935ff] h-12 w-full rounded-xl flex items-center justify-center text-white">
            Update
          </button>
          <div className="flex ">
            <div>View Help Docs</div>
            <RiArrowDropDownLine className=" -rotate-90 text-2xl" />
          </div>
        </div>
        <div className="px-6 border-l-2 border-[#7f71ff]">
          <div>
            Are you considering a <span>Housing Advance</span>
          </div>
          <div>Limited time reduced interest.</div>
          <div className="text-sm text-[#7f71ff] font-bold flex ">
            <div>Learn more</div>
            <RiArrowDropDownLine className=" -rotate-90 text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
