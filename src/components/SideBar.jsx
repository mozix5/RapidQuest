import React from "react";
import logo from "../assets/logo.jpeg";
import { FaSearch } from "react-icons/fa";
import { PiHouseBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FaRegRectangleList } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const iconContainer =
    " hover:bg-[#3e2edf] rounded-lg p-2 text-[#adadad] hover:text-white cursor-pointer";
  return (
    <>
      <div className="fixed lg:static lg:hidden bottom-0  py-4 flex w-full items-center justify-between z-10 px-7 bg-white ">
        <div className={`${iconContainer}`}>
          <FaSearch className="text-lg " />
        </div>
        <div
          id="/"
          className={`${iconContainer} target:bg-[#3e2edf]`}
          onClick={() => {
            navigate("/");
          }}
        >
          <PiHouseBold className="text-2xl " />
        </div>
        <div
          id="profile"
          className={`${iconContainer} target:bg-[#3e2edf]`}
          onClick={() => {
            navigate("/profile");
          }}
        >
          <FaRegUser className="text-xl" />
        </div>
        <div
          className={`${iconContainer}`}
          onClick={() => {
            navigate("/feed");
          }}
        >
          <FaRegNewspaper className="text-xl" />
        </div>
        <div
          className={`${iconContainer}`}
          onClick={() => {
            navigate("/list");
          }}
        >
          <FaRegRectangleList className="text-xl" />
        </div>

        <div className={`${iconContainer}`} onClick={useNavigate("/profile")}>
          <IoExitOutline className="text-xl" />
        </div>
      </div>
      <div className="hidden lg:w-[3vw] py-4 lg:flex  lg:flex-col lg:gap-12 items-center justify-center lg:h-full px-7 bg-white rounded-tl-3xl rounded-bl-3xl">
        <div className="flex lg:flex-col lg:gap-6 lg:items-center lg:justify-center">
          <div className="hidden lg:block h-8 w-6 rounded-3xl bg-transparent">
            <img src={logo} className=" object-contain"></img>
          </div>
          <div className={`${iconContainer}`}>
            <FaSearch className="text-lg " />
          </div>
        </div>
        <div className="flex lg:flex-col lg:items-center lg:gap-6 flex-1 ">
          <div
            id="/"
            className={`${iconContainer} target:bg-[#3e2edf]`}
            onClick={() => {
              navigate("/");
            }}
          >
            <PiHouseBold className="text-2xl " />
          </div>
          <div
            id="profile"
            className={`${iconContainer} target:bg-[#3e2edf]`}
            onClick={() => {
              navigate("/profile");
            }}
          >
            <FaRegUser className="text-xl" />
          </div>
          <div
            className={`${iconContainer}`}
            onClick={() => {
              navigate("/feed");
            }}
          >
            <FaRegNewspaper className="text-xl" />
          </div>
          <div
            className={`${iconContainer}`}
            onClick={() => {
              navigate("/list");
            }}
          >
            <FaRegRectangleList className="text-xl" />
          </div>
        </div>
        <div className=" flex lg:flex-col lg:gap-6">
          <div
            className={`${iconContainer} hidden lg:block`}
            onClick={useNavigate("/notification")}
          >
            <FaRegBell className=" text-xl" />
          </div>
          <div className={`${iconContainer}`} onClick={useNavigate("/profile")}>
            <IoExitOutline className="text-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
