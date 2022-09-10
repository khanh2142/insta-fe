import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Popover } from "@mui/material";

import "../../../styles/header/list/activity.css";

const Activity = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Link
        to="/"
        className="header__list--icon"
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <i class="fa-regular fa-heart"></i>
      </Link>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        disableScrollLock={true}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "100px",
          horizontal: "center",
        }}
      >
        <div className="activity__container">
          <div className="activity__icon">
            <i class="fa-regular fa-heart"></i>
          </div>
          <p>Activity On Your Posts</p>
          <p>
            When someone likes or comments on one of your posts, you'll see it
            here.
          </p>
        </div>
      </Popover>
    </>
  );
};

export default Activity;
