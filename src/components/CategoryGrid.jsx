import React from "react";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdLaptopMac } from "react-icons/md";
import { SiSamsung } from "react-icons/si";
import { PiTelevision } from "react-icons/pi";
import { LiaFanSolid } from "react-icons/lia";
import { GiTwoCoins } from "react-icons/gi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { AiFillInsurance } from "react-icons/ai";

const CategoryGrid = () => {
  const categories = [
    { icon: <FaMobileScreenButton className="lg:text-3xl text-xl" />, label: "Smart Phones" },
    { icon: <MdLaptopMac className="lg:text-3xl text-xl" />, label: "Laptops" },
    { icon: <SiSamsung className="lg:text-3xl text-xl" />, label: "Samsung Installments" },
    { icon: <PiTelevision className="lg:text-3xl text-xl" />, label: "TV" },
    { icon: <LiaFanSolid className="lg:text-3xl text-xl" />, label: "Fans" },
    { icon: <GiTwoCoins className="lg:text-3xl text-xl" />, label: "Local Sellers" },
    { icon: <LiaSwimmingPoolSolid className="lg:text-3xl text-xl" />, label: "Pools" },
    { icon: <AiFillInsurance className="lg:text-3xl text-xl" />, label: "Comin Insurance" },
  ];

  return (
    <div className="lg:py-16 py-7 lg:px-36 px-4 grid grid-cols-4 lg:gap-4 gap-1 text-xs lg:text-sm">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="lg:p-4 p-2 bg-blue-500 text-white mt-8 rounded-full flex items-center justify-center">
            {category.icon}
          </div>
          <p className="mt-1 text-center">{category.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
