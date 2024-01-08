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
const navigate=useNavigate()
    const iconContainer=' hover:bg-[#3e2edf] rounded-lg p-2 text-[#adadad] hover:text-white cursor-pointer'
  return (
    <div className="w-[3vw] py-4 flex flex-col gap-12 items-center justify-center h-full px-7 bg-white rounded-tl-3xl rounded-bl-3xl">
      <div className="flex flex-col gap-6 items-center justify-center">
        <div className=" h-8 w-6 rounded-3xl bg-transparent">
          <img src={logo} className=" object-contain"></img>
        </div>
        <div className={`${iconContainer}`}>
          <FaSearch className="text-lg " />
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 flex-1 ">
        <div id="/" className={`${iconContainer} target:bg-[#3e2edf]`} onClick={ ()=>{navigate('/')}}>
          <PiHouseBold className="text-2xl " />
        </div>
        <div id="profile" className={`${iconContainer} target:bg-[#3e2edf]`} onClick={ ()=>{navigate('/profile')}}>
          <FaRegUser className="text-xl" />
        </div>
        <div className={`${iconContainer}`} onClick={ ()=>{navigate('/feed')}}>
          <FaRegNewspaper className="text-xl" />
        </div>
        <div className={`${iconContainer}`} onClick={ ()=>{navigate('/list')}}>
          <FaRegRectangleList className="text-xl" />
        </div>
      </div>
      <div className=" flex flex-col gap-6">
        <div className={`${iconContainer}`} onClick={useNavigate('/notification')}>
          <FaRegBell className=" text-xl" />
        </div>
        <div className={`${iconContainer}`} onClick={useNavigate('/profile')}>
          <IoExitOutline className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
