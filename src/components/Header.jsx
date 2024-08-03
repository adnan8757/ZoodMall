import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-[100%] h-12 flex justify-between z-50 items-center bg-yellow-400 text-sm px-4 lg:px-8 sticky top-0">
      <div className="flex items-center gap-4 lg:gap-8 text-xs lg:text-sm">
        <p className="flex items-center lg:gap-1 gap-[2px] whitespace-nowrap">
          <IoEyeOutline /> Hot Deals
        </p>
        <p className="flex items-center lg:gap-1 gap-[2px]">
          <CiStar /> Top Categories
        </p>
        <p className="flex items-center lg:gap-1 gap-[2px]">
          <IoBagCheckOutline /> Sell on Zood
        </p>
      </div>
      <div className="flex items-center gap-2 lg:gap-4 text-xs lg:text-sm">
        <p className="flex items-center gap-2">EN</p>
        <p className="flex items-center gap-2">Sign In</p>
      </div>
    </div>
  );
};

export default Header;
