import React, { useEffect } from "react";

import { Container, Grid } from "@mui/material";

import "../../styles/home/home.css";
import Post from "./main/post/Post";
import Story from "./main/story/Story";

import data from "./data.json";

const Home = () => {
  return (
    <div className="home">
      <Container className="home__container">
        <Grid container spacing={2}>
          <Grid item xs={6} className="home__main--content">
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
                      comments={item.comments}
                      time={item.time}
                    />
                  );
                })
              : ""}
          </Grid>
          <Grid item xs={6}>
            2
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
