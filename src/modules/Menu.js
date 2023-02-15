import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Menu = () => {
  return (
    <div className="py-10 px-16">
      <div className="flex items-center justify-between mb-14">
        <Link to="/">
          <img
            src="logo.png"
            alt=""
            className="w-[140px] h-auto object-cover"
          />
        </Link>

        <div className="flex gap-x-5 text-secondary-3 text-[15px] font-medium">
          <span>0371 525 777</span>
          <Link to="/">Help</Link>
          <Link to="/sign-in">Account</Link>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Menu;
