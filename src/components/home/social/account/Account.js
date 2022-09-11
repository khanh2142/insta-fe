import React from "react";
import { Link } from "react-router-dom";

import "../../../../styles/home/social/account/account.css";

const Account = (props) => {
  return (
    <div className="account__container">
      <div className="account__container--user">
        <div
          className="account__user--avatar"
          style={{ backgroundImage: `url(${props.avatar})` }}
        ></div>
        <div className="account__user--info">
          <div className="account__user--nickname">{props.nickname}</div>
          <div className="account__user--fullname">{props.fullname}</div>
        </div>
      </div>
      <Link className="account__switch" to="">
        Switch
      </Link>
    </div>
  );
};

export default Account;
