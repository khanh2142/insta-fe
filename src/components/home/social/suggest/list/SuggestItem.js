import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../../../../styles/home/social/suggest/list/suggestItem.css";
import AvatarHover from "../../../../reuse/AvatarHover";

const SuggestItem = (props) => {
  const [avatarHover, setAvatarHover] = useState(false);

  return (
    <div className="suggestItem__container">
      <div
        className="suggestItem__container--user"
        onMouseOver={() => setAvatarHover(true)}
        onMouseLeave={() => setAvatarHover(false)}
      >
        <Link
          to={props.nickname}
          className="suggestItem__user--avatar"
          style={{ backgroundImage: `url(${props.avatar})` }}
        ></Link>
        <div className="suggestItem__user--info">
          <Link to={props.nickname} className="suggestItem__user--nickname">
            {props.nickname}
          </Link>
          <div className="suggestItem__user--fullname">{props.fullname}</div>
        </div>

        {avatarHover && (
          <AvatarHover
            avatar={props.avatar}
            nickname={props.nickname}
            image={props.image}
            isFollowing={false}
          />
        )}
      </div>
      <Link to="" className="suggestItem__follow">
        Follow
      </Link>
    </div>
  );
};

export default SuggestItem;
