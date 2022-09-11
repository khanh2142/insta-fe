import React from "react";
import { Link } from "react-router-dom";

import "../../../../../styles/home/social/suggest/list/suggestItem.css";

const SuggestItem = (props) => {
  return (
    <div className="suggestItem__container">
      <div className="suggestItem__container--user">
        <div
          className="suggestItem__user--avatar"
          style={{ backgroundImage: `url(${props.avatar})` }}
        ></div>
        <div className="suggestItem__user--info">
          <div className="suggestItem__user--nickname">{props.nickname}</div>
          <div className="suggestItem__user--fullname">{props.fullname}</div>
        </div>
      </div>
      <Link to="" className="suggestItem__follow">
        Follow
      </Link>
    </div>
  );
};

export default SuggestItem;
