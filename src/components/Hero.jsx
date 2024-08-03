import React from "react";
import SimpleSlider from "./SimpleSlider";
import CategoryGrid from "./CategoryGrid";

const Hero = () => {
  return (
    <>
      <div >
        <div className="w-full lg:px-52 px-3 ">
        <SimpleSlider />
        </div>
        <CategoryGrid/>
       <div className="px-52 mb-5">
        <img src="https://upload.zoodmall.com/app/banner/promo_banner_6642020c898d1.png" alt="" />
       </div>
      </div>
    </>
  );
};

export default Hero;
