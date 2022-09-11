import React from "react";

import { Link } from "react-router-dom";

import "../../../../styles/home/social/suggest/suggest.css";
import SuggestItem from "./list/SuggestItem";

import data from "../../data.json";

const Suggest = () => {
  return (
    <div className="suggest__container">
      <div className="suggest__container--title">
        <div className="suggest__title--content">Suggestion for you</div>
        <Link to="" className="suggest__title--link">
          See all
        </Link>
      </div>
      <div className="suggest__container--list">
        {data
          ? data.map((item, index) => {
              return (
                index !== 0 && (
                  <SuggestItem
                    avatar={item.avatar}
                    nickname={item.nickname}
                    fullname={item.fullname}
                    image={item.image}
                  />
                )
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Suggest;
