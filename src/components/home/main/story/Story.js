import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "../../../../styles/home/main/story/story.css";
import UserStory from "./UserStory";

import data from "../../data.json";

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
        {data
          ? data.map((item) => {
              return (
                <UserStory
                  key={item.nickname}
                  nickname={item.nickname}
                  image={item.avatar}
                />
              );
            })
          : ""}
      </Slider>
    </div>
  );
};

export default Story;
