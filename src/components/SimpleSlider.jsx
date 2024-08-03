import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://upload.zoodmall.com/app/banner/main_banner_66aa3508ba78f.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://upload.zoodmall.com/app/banner/main_banner_668ed729c5593.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://upload.zoodmall.com/app/banner/main_banner_66aa35481a291.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://upload.zoodmall.com/app/banner/main_banner_669f7a32ce093.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://upload.zoodmall.com/app/banner/main_banner_66aa35b26313d.png"
          alt=""
        />
      </div>
    </Slider>
  );
};

export default SimpleSlider;
