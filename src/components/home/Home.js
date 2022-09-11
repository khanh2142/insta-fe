import React, { useEffect } from "react";

import { Container, Grid } from "@mui/material";

import "../../styles/home/home.css";
import Post from "./main/post/Post";
import Story from "./main/story/Story";

import Account from "./social/account/Account";
import Suggest from "./social/suggest/Suggest";

import data from "./data.json";

const Home = () => {
  return (
    <div className="home">
      <Container className="home__container">
        <Grid container className="home__container--box">
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            lg={6}
            centered
            className="home__main--content"
          >
            <Story />
            {data
              ? data.map((item, index) => {
                  return (
                    <Post
                      key={index}
                      nickname={item.nickname}
                      avatar={item.avatar}
                      image={item.image}
                      likes={item.like}
                      content={item.content}
                      comments={item.comment}
                      time={item.time}
                    />
                  );
                })
              : ""}
          </Grid>
          <Grid
            item
            sm={0}
            md={4}
            lg={4}
            sx={{
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }}
          >
            <Account
              avatar={data[0].avatar}
              fullname="Nguyễn Bá Khánh"
              nickname={data[0].nickname}
            />
            <Suggest />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
