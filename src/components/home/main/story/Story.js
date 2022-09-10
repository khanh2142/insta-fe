import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "../../../../styles/home/main/story/story.css";
import UserStory from "./UserStory";

const Story = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div className="story__container">
      <Slider {...settings}>
        <UserStory
          nickname="khanh214213123212"
          image="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/01_2022/DTCL/Chibi_Jinx_Firecracker.png"
        />
        <UserStory
          nickname="khanh2142"
          image="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/01_2022/DTCL/Chibi_Jinx_Firecracker.png"
        />
        <UserStory
          nickname="khanh2142"
          image="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/01_2022/DTCL/Chibi_Jinx_Firecracker.png"
        />
        <UserStory
          nickname="khanh2142"
          image="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/01_2022/DTCL/Chibi_Jinx_Firecracker.png"
        />
        <UserStory
          nickname="khanh2142"
          image="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/01_2022/DTCL/Chibi_Jinx_Firecracker.png"
        />
        <UserStory
          nickname="khanh2142"
          image="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/01_2022/DTCL/Chibi_Jinx_Firecracker.png"
        />
        <UserStory
          nickname="khanh2142"
          image="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/01_2022/DTCL/Chibi_Jinx_Firecracker.png"
        />
        <UserStory
          nickname="khanh2142"
          image="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/01_2022/DTCL/Chibi_Jinx_Firecracker.png"
        />
      </Slider>
    </div>
  );
};

export default Story;
