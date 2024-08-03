import React, { Fragment } from "react";

const data = [
  {
    name: "Mobile A",
    image:
      "https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://images2.zoodmall.com/https%3A/d3fyizz0b46qgr.cloudfront.net/global/phones/camon20pro/black.png",
    price: 299.99,
    rating: 4.5,
  },
  {
    name: "Mobile B",
    image:
      "https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://images.zoodmall.com/web/product/picture/43/29902643/171449961416681000141.jpeg",
    price: 199.99,
    rating: 4.0,
  },
  {
    name: "Mobile C",
    image:
      "https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://images2.zoodmall.com/https%3A/mobileleb.com/cdn/shop/products/honor-mobile-phone-honor-x6-4gb-128gb-6-5-tft-lcd-mediatek-mt6762-g-helio-g25-12nm-triple-cam-50mp-2mp-2mp-selfie-cam-5mp-31649948631172_grande.jpg%3Fv%3D1665993254",
    price: 399.99,
    rating: 4.7,
  },
  {
    name: "Mobile D",
    image:
      "https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://images.zoodmall.com/web/product/picture/61/29905861/171508020990508800022.jpeg",
    price: 149.99,
    rating: 3.8,
  },
];

const Mobiles = () => {
  return (
    <>
      <div className="lg:px-52 w-full mb-10">
        <h1 className="mb-5 font-bold text-2xl">Top Mobiles up to 6 installments</h1>
        <div className="w-full flex gap-8 flex-wrap lg:justify-normal justify-center ">
          {data.map((value, i) => {
            return (
              <div
                className="w-[250px] bg-gray-200 rounded-lg shadow-xl p-2 "
                key={i}
              >
                <img src={value.image} alt="" />
                <p className="pt-3">{value.name}</p>
                <p className="font-bold">{value.price}</p>
                <p>Rating: {value.rating}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Mobiles;

