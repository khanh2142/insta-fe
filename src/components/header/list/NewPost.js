import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Modal, Box, Backdrop, Button } from "@mui/material";
import Separate from "../../reuse/Separate";

import "../../../styles/header/list/newpost.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 544,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
};

const NewPost = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Link to="/" className="header__list--icon" onClick={handleOpen}>
        <i class="fa-regular fa-square-plus"></i>
      </Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableScrollLock={true}
      >
        <Box sx={style} className="newpost__container">
          <p className="newpost__title">Create new post</p>
          <Separate />
          <div className="newpost__upload">
            <i class="fa-solid fa-photo-film"></i>
            <p className="newpost__content">Drag photos and videos here</p>
            <Button
              variant="contained"
              component="label"
              className="newpost__button"
            >
              Select from computer
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default NewPost;
