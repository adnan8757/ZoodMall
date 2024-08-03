import React from "react";

const Allbrands = () => {
  return (
    <div className="lg:px-52 px-5">
      <h2 className="text-lg font-semibold mb-4">Top Brands</h2>
      <div className="flex flex-wrap justify-between lg:gap-0 gap-5 mb-8">
        {[
          {
            name: "Xiaomi",
            img: "https://upload.zoodmall.com/app/homePageLayout/1664971546368.png",
          },
          {
            name: "Adidas",
            img: "https://upload.zoodmall.com/app/homePageLayout/1664971236699.jpg",
          },
          {
            name: "Blackview",
            img: "https://upload.zoodmall.com/app/homePageLayout/168569126395.jpg",
          },
          {
            name: "Huawei",
            img: "https://upload.zoodmall.com/app/homePageLayout/1664971810729.jpg",
          },
          {
            name: "Sony",
            img: "https://upload.zoodmall.com/app/homePageLayout/1664971445730.jpg",
          },
          {
            name: "Toshiba",
            img: "https://upload.zoodmall.com/app/homePageLayout/1664972059608.jpg",
          },
          {
            name: "Calvin Klein",
            img: "https://upload.zoodmall.com/app/homePageLayout/1664971675300.jpg",
          },
          {
            name: "DSP",
            img: "https://images.zoodmall.com/app/homePageLayout/1648733379434.jpg",
          },
        ].map((brand, index) => (
          <div key={index} className="flex-1 text-center mb-4">
            <img
              src={brand.img}
              alt={brand.name}
              className="mx-auto mb-2 h-12"
            />
            <p>{brand.name}</p>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-4">
        Top Categories in 6 installments
      </h2>
      <div className="flex flex-wrap justify-between lg:gap-0 gap-5">
        {[
          {
            name: "Earphones",
            img: "https://upload.zoodmall.com/app/homePageLayout/1718178651200.jpg",
          },
          {
            name: "Mobiles",
            img: "https://upload.zoodmall.com/app/homePageLayout/1718180466257.jpg",
          },
          {
            name: "Perfumes",
            img: "https://upload.zoodmall.com/app/homePageLayout/169960090654.jpg",
          },
          {
            name: "Gift Sets",
            img: "https://upload.zoodmall.com/app/homePageLayout/1699601002621.jpg",
          },
        ].map((category, index) => (
          <div key={index} className="flex-1 text-center mb-10">
            <img
              src={category.img}
              alt={category.name}
              className="mx-auto mb-2 "
            />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allbrands;
