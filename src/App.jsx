import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import SideBar from "./components/SideBar";
import List from "./pages/List";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className=" bg-[#e7e7e9] p-4 h-screen">
      <div className=" bg-white shadow-lg h-full rounded-3xl flex ">
        <div>
          <SideBar />
        </div>
        <div className=" flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<Feed/>} />
            <Route path="/list" element={<List/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
