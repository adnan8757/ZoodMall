/* eslint-disable react/prop-types */
import React from "react";

const ProductCard = ({ image, title, description, price, installments }) => (
  <div className="border lg:p-4 p-2 rounded-lg shadow-md flex flex-col  items-center">
    <img
      src={image}
      alt={title}
      className="h-[222px] w-[255px] object-contain mb-4"
    />
    <p className="mb-2">{title}</p>
    <div className="text-gray-900 font-bold mb-2">Price: ₹ {price}</div>
  </div>
);

export default ProductCard;
