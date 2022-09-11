import React from "react";

import "../../styles/reuse/avatarHover.css";
import numberWithCommas from "./function/numberWithCommas";
import randomNumber from "./function/randomNumber";
import Separate from "./Separate";

const AvatarHover = (props) => {
  return (
    <div
      className="avatarHover__container"
      onMouseOver={(e) => e.preventDefault()}
    >
      <div className="avatarHover__user">
        <div
          className="avatarHover__user--avatar"
          style={{ backgroundImage: `url(${props.avatar})` }}
        ></div>
        <div className="avatarHover__user--info">
          <div className="avatarHover__info--nickname">{props.nickname}</div>
          <div className="avatarHover__info--desc">Description here !</div>
        </div>
      </div>
      <Separate />
      <div className="avatarHover__detail">
        <div className="avatarHover__detail--item">
          <div className="avatarHover__item--quantity">
            {numberWithCommas(randomNumber(100, 10000))}
          </div>
          <div className="avatarHover__item--content">posts</div>
        </div>
        <div className="avatarHover__detail--item">
          <div className="avatarHover__item--quantity">
            {numberWithCommas(randomNumber(100, 10000))}
          </div>
          <div className="avatarHover__item--content">followers</div>
        </div>
        <div className="avatarHover__detail--item">
          <div className="avatarHover__item--quantity">
            {numberWithCommas(randomNumber(100, 10000))}
          </div>
          <div className="avatarHover__item--content">following</div>
        </div>
      </div>
      <div className="avatarHover__images">
        <div
          className="avatarHover__image"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <div
          className="avatarHover__image"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <div
          className="avatarHover__image"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
      </div>
      <div className="avatarHover__contact">
        <div className="avatarHover__contact--item">Message</div>
        <div className="avatarHover__contact--item contact--strong">
          Following
        </div>
      </div>
    </div>
  );
};

export default AvatarHover;
