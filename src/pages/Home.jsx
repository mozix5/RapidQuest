import React, { useState } from "react";
import CustomBarChart from "../components/CustomBarChart";
import CircularProgress from "../components/CircularProgress";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";

const Home = () => {
  const [slider1, setSlider1] = useState(0);
  const [slider2, setSlider2] = useState(0);

  const TransactionItem = ({ date, desc }) => {
    return (
      <div className="py-6 lg:py-4 border-b-2">
        <div className={`${lightText}`}>{date}</div>
        <div className={`py-1 ${baseText}`}>{desc}</div>
      </div>
    );
  };
  const RetirementIncome = ({ gridStyle, customStyle, heading, value }) => {
    return (
      <div className={`py-2 border-b-2 border-[#7263ff] flex-1 ${gridStyle}`}>
        <div className={` lg:text-xl ${numericStyle} ${customStyle}`}>
          {value}
        </div>
        <div className={`${lightText} py-1`}>{heading}</div>
      </div>
    );
  };

  const numericStyle = "text-[#343434] font-nunito";
  const headingText = " text-[#343434] font-bitter";
  const subHeadingText =
    "text-[1.5rem] text-[#343434] font-bitter lg:text-[1.1rem]";
  const lightText = "lg:text-xs text-lg font-semibold text-[#adadad]";
  const baseText = "text-[1.4rem] text-[#343434] lg:text-xs font-bold";

  const slider1Background = {
    background: `linear-gradient(to right, #73a4ff ${slider1}%, #ececec ${slider1}%)`,
  };
  const slider2Background = {
    background: `linear-gradient(to right, #73a4ff ${slider2}%, #ececec ${slider2}%)`,
  };

  return (
    <div className=" h-full lg:flex lg:pr-[3vw] ">
      <div className="flex justify-end lg:hidden sticky top-0 bg-white py-4 pr-4 ">
        <FaRegBell className=" text-3xl text-[#adadad]" />
      </div>
      <div className="bg-white lg:bg-[#fafafa] lg:p-6">
        <div className="h-full lg:w-[20vw] ">
          <div className="flex gap-4 w-full px-8 lg:px-4 pt-8 pb-4 lg:py-0">
            <div className="h-[90px] w-[90px] lg:h-16 lg:w-16 rounded-full bg-black"></div>
            <div className="flex justify-center flex-col text-left gap-1 ">
              <div className={`text-4xl lg:text-2xl ${headingText}`}>
                Hi Mike,
              </div>
              <div className="font-semibold lg:text-xs text-xl ">
                welcome back.
              </div>
            </div>
          </div>
          <div className="px-8 lg:p-0 pt-8">
            <div className=" bg-[#fafafa] rounded-3xl lg:rounded-none pb-8 lg:pb-0 lg:mt-0 pt-6 flex flex-col  lg:gap-2 px-10 lg:px-7 lg:pt-8 ">
              <div className={`text-2xl lg:text-lg ${headingText}`}>Today</div>
              <div>
                <div className={`text-[53px]  lg:text-2xl ${numericStyle}`}>
                  19,892
                </div>
                <div className={`lg:py-1 ${lightText}`}>Account Balance</div>
              </div>
              <div className="flex gap-14 lg:block pt-8 pb-6 lg:p-0">
                <div>
                  <div className={`lg:text-base text-3xl ${numericStyle}`}>
                    4,892
                  </div>
                  <div className={`py-1 ${lightText}`}>
                    Year-to-Date
                    <span className=" hidden lg:block">-Contrubutions</span>
                  </div>
                </div>
                <div>
                  <div className={`lg:text-base text-3xl ${numericStyle}`}>
                    1,892
                  </div>
                  <div className={`py-1 ${lightText}`}>Total Interest</div>
                </div>
              </div>
              <button className=" bg-[#4935ff] w-full h-16 lg:h-10 lg:w-32 rounded-xl flex items-center justify-center text-white lg:text-base text-xl">
                I want to...
              </button>
            </div>
          </div>
          <div className="px-8 lg:px-0">
            <div className="lg:pt-8 lg:px-7 bg-[#fafafa] px-8  pt-6 pb-8 lg:pb-0 mt-8 lg:mt-0 rounded-3xl">
              <div className={`py-2 ${subHeadingText}`}>Recent Transaction</div>
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
      </div>

      <div className="text-[#343434] lg:px-20 py-6 flex-1 px-8">
        <div className="pb-4">
          <div className="text-[#7263ff] font-bitter text-xl lg:text-sm">
            Retirement Income
          </div>
          <div className={` lg:text-xl py-1 ${subHeadingText}`}>
            Starting Year 2056
          </div>
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 grid-rows-2 lg:grid-rows-1">
          <RetirementIncome
            gridStyle="col-span-2 lg:col-span-1"
            customStyle="text-3xl"
            value="300,000"
            heading="My Goal"
          />
          <RetirementIncome
            value="59%"
            heading="Goal Achieved"
            customStyle="text-2xl"
          />
          <RetirementIncome
            value="300,000"
            heading="Est. Monthly Income"
            customStyle="text-2xl"
          />
        </div>
        <div className="py-8 mt-6 lg:mt-4">
          <div className={`${subHeadingText}`}>Contributions Overtime</div>
          <CustomBarChart />
        </div>
        <div className="lg:pt-12 mt-10 pt-20 lg:mt-0">
          <div className={`${subHeadingText}`}>
            How do I compare to my peers?
          </div>
          <div className={`${lightText} py-2 `}>
            These numbers represent current goal achievement
          </div>
          <div className="grid grid-flow-row  items-center grid-cols-3 lg:grid-cols-5  lg:grid-flow-row">
            <div
              className={`${baseText} py-3 col-span-3 lg:col-span-2 [&>*]:py-2 [&>*]:flex [&>*]:items-center [&>*]:gap-1`}
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

      <div className="lg:w-[20vw] bg-[#fafafa] ">
        <div className={`${subHeadingText} text-lg py-6 lg:px-6 px-8`}>
          Retirement Strategy
        </div>
        <div className="lg:px-6 px-8">
          <div className=" lg:border-b-2 lg:pb-5">
            <div className="">
              <div className={`${baseText} lg:text-sm py-4`}>
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
                <div className={`pb-1 ${baseText}`}>{slider1} %</div>
              </div>
            </div>
            <div className="">
              <div className={`${baseText} lg:text-sm py-4`}>
                Retirement Age
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
                <div className={`pb-1 ${baseText}`}>{slider2}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 lg:px-6 pb-0 lg:py-6 relative">
          <div className="flex items-center">
            <div className={`py-6 flex-1 ${baseText} lg:${baseText}`}>
              Employer Contribution
            </div>
            <div className={`${baseText}`}>12%</div>
          </div>
          <div className="flex items-center">
            <div className={`lg:py-5 py-7 flex-1 ${baseText}  lg:${baseText}`}>
              Interest Rate
            </div>
            <div className={`${baseText}`}>5%</div>
          </div>
          <button className=" bg-[#4935ff] h-16 lg:h-10 lg:w-full lg:rounded-xl flex items-center justify-center text-white lg:static absolute bottom-0 left-0 right-0 rounded-t-lg z-20">
            Update
          </button>
          <div className="text lg:flex justify-center mt-6  text-[#7f71ff] text-sm font-bold cursor-pointer hidden text-center">
            <div>View Help Docs</div>
            <RiArrowDropDownLine className=" -rotate-90 text-2xl" />
          </div>
        </div>
        <div className="px-6 mt-4 hidden lg:block border-l-2 border-[#7f71ff]">
          <div>
            <span className={`font font-semibold`}>
              {" "}
              Are you considering a{" "}
            </span>{" "}
            <span className="text-sm font-bold">Housing Advance?</span>
          </div>
          <div className={`${lightText}`}>Limited time reduced interest.</div>
          <div className="text-sm text-[#7f71ff] font-bold flex ">
            <div className="py-2">Learn more</div>
            <RiArrowDropDownLine className=" -rotate-90 text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
