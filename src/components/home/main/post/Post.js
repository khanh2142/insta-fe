import React from "react";

import "../../../../styles/home/main/post/post.css";

import { Box, Button, Typography, Modal } from "@mui/material";

import Separate from "../../../reuse/Separate";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const Post = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="post__container">
      <div className="post__container--head">
        <div className="post__head--user">
          <div className="post__head--avatar">
            <div
              className="post__avatar--image"
              style={{ backgroundImage: `url(${props.avatar})` }}
            ></div>
          </div>
          <div className="post__head--nickname">{props.nickname}</div>
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
      <img className="post__image" src={props.image}></img>
      <div className="post__function">
        <div className="post__function--main">
          <div className="post__function--item">
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
          {numberWithCommas(props.likes)}
        </span>
        <span className="post__like--content">likes</span>
      </div>

      <p className="post__content">
        <strong>{props.nickname}</strong> {props.content}
      </p>

      <div className="post__comment">
        View all {numberWithCommas(props.comments)} comments
      </div>

      <div className="post__time">{props.time} ago</div>

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
  );
};

export default Post;
