import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20 lg:px-52 px-4">
      <div className="mb-20">
        <h1 className="mb-4 font-bold text-[19px]">
          ZOOD Mall - Shop for Happiness
        </h1>
        <p>
          Welcome to a whole new world of shopping with our ZOOD Mall Website!
          Join our long list of happy customers and start shopping for your
          happiness, today! Download and start exploring through millions of
          products from Local and Cross Border sellers. With ZOOD Mall you will
          get: WIDE RANGE OF PRODUCTS Discover millions of products from around
          the world, including International, Chinese, and local sellers. Browse
          with ease and shop from various categories like Clothing (Men and
          Women), Phones & Accessories, Computers & Electronics, General
          Accessories, and many more. DISCOUNTS AND COUPONS Benefit from tons of
          discounts on your purchase with our Promo Codes and Discount Coupons
          available upon registration, and new offers daily for existing users.
          DAILY FLASH DEALS Catch the BEST PRICE GUARANTEED by browsing through
          our 24-Hour Flash Deals, with brand new offers and products to choose
          from every day. OFFERS Explore our Offers section to catch our latest
          discounts on selected items or categories, and benefit from frequent
          promotions on a regular basis throughout the year. EASE OF SHOPPING
          Select from various available payment methods for every Country from
          Pay Online and Pay After Delivery, to Cash on Delivery and
          Installments (available in Uzbekistan). Track your orders in
          real-time, so you know exactly when you will receive it. Feel secure
          with our Local Return and Refund policy to make sure you are satisfied
          with every purchase. ZoodMall is powered by OrientSwiss the leading
          Marketplace platform based in Switzerland with regional offices across
          Silk Road countries. ZoodMall received the Award of
        </p>
      </div>
      <div>
        <footer className="p-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
                <div className="flex flex-col items-center md:items-start">
                  <img
                    src="https://www.zoodmall.com.lb/_nuxt/img/zoodmall.84a5e4a.svg"
                    alt="ZoodMall Logo"
                    className="h-[30px] w-[160px]  mb-4"
                  />
                  <p className="text-gray-700 font-bold">
                    Find us on Social Media
                  </p>
                  <div className="flex space-x-2 mt-2">
                    <a href="#" className="text-gray-700">
                      <FaYoutube size={30} />
                    </a>
                    <a href="#" className="text-gray-700">
                      <FaFacebookF size={30} />
                    </a>
                    <a href="#" className="text-gray-700">
                      <FaInstagram size={30} />
                    </a>
                  </div>
                  <p className="text-gray-700 mt-4">Download our mobile app</p>
                  <div className="flex space-x-2 mt-2">
                    <a href="#">
                      <img
                        src="https://www.zoodmall.com.lb/_nuxt/img/appStore_en.2928664.svg"
                        alt="App Store"
                        className="h-10"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="https://www.zoodmall.com.lb/_nuxt/img/playStore_en.499db49.svg"
                        alt="Google Play"
                        className="h-10"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="https://www.zoodmall.com.lb/_nuxt/img/Huawei_en.473f26b.png"
                        alt="App Gallery"
                        className="h-10"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <ul className="space-y-2  text-gray-700">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy & Security Policy</a>
                    </li>
                    <li>
                      <a href="#">Return & Refund Policy</a>
                    </li>
                    <li>
                      <a href="#">Sell on Zood</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 md:mt-0 flex flex-col items-center md:items-start">
                <h3 className="text-gray-700 font-bold mb-2">CONTACT</h3>
                <p className="text-gray-700 mb-2">Have any question?</p>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                  Ask Your Question
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-300 pt-4 mb-10">
              <p className="text-gray-700 text-sm">
                &copy; 2023 Zood shopping for happiness
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0 gap-5">
                <img
                  src="https://www.zoodmall.com.lb/_nuxt/img/paymentmethod.bb99d76.png"
                  alt="ZoodPay"
                  className="h-[20px] "
                />
                <img
                  src="https://www.zoodmall.com.lb/_nuxt/img/paymentmethod3.07483a4.png"
                  alt="MasterCard"
                  className="h-[20px] "
                />
                <img
                  src="https://www.zoodmall.com.lb/_nuxt/img/paymentmethod4.25bb891.png"
                  alt="Visa"
                  className="h-[20px] "
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
