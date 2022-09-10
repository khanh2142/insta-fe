import React, { useState } from "react";

import { Avatar, Menu, MenuItem } from "@mui/material";

import { Link } from "react-router-dom";

import "../../../styles/header/list/personalPage.css";
import Separate from "../../reuse/Separate";

const PersonalPage = () => {
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
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          style={{ width: "28px", height: "28px" }}
        />
      </Link>
      <Menu
        id="personalPage__menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        disableScrollLock={true}
      >
        <MenuItem onClick={handleClose} className="personalPage__menu--item">
          <div className="personalPage__menu--icon">
            <i class="fa-regular fa-circle-user"></i>
          </div>
          <div>Profile </div>
        </MenuItem>
        <MenuItem onClick={handleClose} className="personalPage__menu--item">
          <div className="personalPage__menu--icon">
            <i class="fa-regular fa-bookmark"></i>
          </div>
          <div>Save</div>
        </MenuItem>
        <MenuItem onClick={handleClose} className="personalPage__menu--item">
          <div className="personalPage__menu--icon">
            <i class="fa-solid fa-gear"></i>
          </div>
          <div>Settings </div>
        </MenuItem>
        <MenuItem onClick={handleClose} className="personalPage__menu--item">
          <div className="personalPage__menu--icon">
            <i class="fa-solid fa-repeat"></i>
          </div>
          <div>Switch accounts </div>
        </MenuItem>
        <Separate />
        <MenuItem onClick={handleClose} className="personalPage__menu--item">
          <div>Log Out </div>
        </MenuItem>
      </Menu>
    </>
  );
};

export default PersonalPage;
