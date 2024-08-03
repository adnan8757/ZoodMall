/* eslint-disable react/prop-types */
import React from 'react';
import ProductCard from './ProductCard';

const Section = ({ title, products }) => (
  <div className="mb-8 ">
    <h1 className="text-2xl text-center font-bold lg:mb-4">{title}</h1>
    <div className="flex flex-wrap lg:gap-0 gap-4 lg:justify-normal justify-center lg:space-x-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </div>
);

export default Section;