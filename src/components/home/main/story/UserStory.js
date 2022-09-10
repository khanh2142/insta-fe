import React from "react";

import "../../../../styles/home/main/story/userStory.css";

const UserStory = (props) => {
  return (
    <div className="userStory__container">
      <div className="userStory__avatar">
        <div
          className="userStory__avatar--image"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
      </div>
      <div className="userStory__nickname">{props.nickname}</div>
    </div>
  );
};

export default UserStory;
