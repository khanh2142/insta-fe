import React, { useState, useEffect } from "react";

import "../../../../styles/home/main/post/detailPost.css";

import "../../../../styles/home/main/post/post.css";

import rawData from "../../data.json";

import AvatarHover from "../../../reuse/AvatarHover";

import { Link } from "react-router-dom";

import { Modal } from "@mui/material";
import Separate from "../../../reuse/Separate";

import numberWithCommas from "../../../reuse/function/numberWithCommas";

const DetailPost = (props) => {
  const [data, setData] = useState({});
  const [avatarHover, setAvatarHover] = useState(false);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    rawData.forEach((item, index) => {
      if (item.id === props.id) {
        setData(rawData[index]);
      }
    });
  }, []);

  return (
    <div className="detailPost__container">
      <img src={data.image} className="detailPost__container--image"></img>
      <div className="detailPost__container--content">
        <div className="post__container--head">
          <div className="post__head--user">
            <div
              className="post__head--avatar"
              onMouseOver={() => setAvatarHover(true)}
              onMouseLeave={() => setAvatarHover(false)}
            >
              <div
                className="post__avatar--image"
                style={{ backgroundImage: `url(${data.avatar})` }}
              ></div>

              {avatarHover && (
                <AvatarHover
                  avatar={data.avatar}
                  nickname={data.nickname}
                  image={data.image}
                  isFollowing={true}
                />
              )}
            </div>

            <div
              to={data.nickname}
              className="post__head--nickname"
              onMouseOver={() => setAvatarHover(true)}
              onMouseLeave={() => setAvatarHover(false)}
            >
              {data.nickname}
            </div>
          </div>
          <div className="post__head--setting" onClick={handleOpen}>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            disableScrollLock={true}
          >
            <div className="post__setting--container" tabIndex={-1}>
              <div
                className="post__setting--button post__setting--danger"
                tabIndex={1}
              >
                Report
              </div>

              <div
                className="post__setting--button post__setting--danger"
                tabIndex={1}
              >
                Unfollow
              </div>

              <div className="post__setting--button" tabIndex={1}>
                Add to favorite
              </div>

              <div className="post__setting--button" tabIndex={1}>
                Go to post
              </div>

              <div className="post__setting--button" tabIndex={1}>
                Share to...
              </div>

              <div className="post__setting--button" tabIndex={1}>
                Copy link
              </div>

              <div className="post__setting--button" tabIndex={1}>
                Embed
              </div>

              <div
                className="post__setting--button"
                tabIndex={1}
                onClick={handleClose}
              >
                Cancel
              </div>
            </div>
          </Modal>
        </div>
        <Separate />
        <p className="post__content">
          <strong>{data.nickname}</strong> {data.content}
        </p>
        <div className="detailPost__content--function">
          <Separate />
          <div className="post__function">
            <div className="post__function--main">
              <div className="post__function--item btn--like">
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="post__function--item">
                <i className="fa-regular fa-comment"></i>
              </div>
              <div className="post__function--item">
                <i className="fa-regular fa-paper-plane"></i>
              </div>
            </div>
            <div className="post__function--save">
              <div className="post__function--item">
                <i className="fa-regular fa-bookmark"></i>
              </div>
            </div>
          </div>
          <div className="post__like">
            <span className="post__like--content post__like--quantity">
              {numberWithCommas(Number(data.like))}
            </span>
            <span className="post__like--content">likes</span>
          </div>
          <div className="post__time">{data.time} ago</div>
          <Separate />
          <div className="post__comment--container">
            <div className="post__comment--emoji">
              <i className="fa-regular fa-face-smile"></i>
            </div>
            <div className="post__comment--area">
              <textarea
                rows={1}
                placeholder="Add a comment..."
                className="post__area--input"
              ></textarea>
              <button className="post__area--button disabled" disabled>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
