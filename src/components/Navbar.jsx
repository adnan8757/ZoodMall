import React from "react";
import { IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
      <div className=" flex flex-wrap align-middle justify-center items-center w-full gap-3 lg:gap-32 mt-5  ">
        <div className=" flex align-middle items-center gap-3">
          <img
            src="https://www.zoodmall.com.lb/_nuxt/img/zoodmall.84a5e4a.svg"
            className="w-24 lg:w-48"
            alt=""
          />
          <div className="relative">
            <input
              type="text"
              className="w-[200px] lg:h-10 h-6 lg:w-[600px] rounded-md placeholder:pl-4 lg:placeholder:text-sm placeholder:text-xs bg-gray-100  "
              placeholder="Search on Food"
            />
            <p className="absolute lg:top-2 top-1 lg:right-4 right-2 z-30">
              <HiMagnifyingGlass className="lg:text-2xl text-sm" />
            </p>
          </div>
        </div>
        <div className=" flex align-middle items-center lg:gap-3 gap-3 lg:text-2xl text-sm">
          <p className=" flex align-middle items-center gap-3 text-blue-800">
            <CiHeart className="lg:text-2xl text-sm" />
          </p>
          <p className=" flex align-middle items-center gap-3 text-blue-800">
            <IoBagOutline className="lg:text-2xl text-sm" />
            Cart
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
