import { Container, Grid } from "@mui/material";
import React from "react";

import "../../styles/home/home.css";
import Post from "./main/post/Post";
import Story from "./main/story/Story";

const Home = () => {
  return (
    <div className="home">
      <Container className="home__container">
        <Grid container spacing={2}>
          <Grid item xs={6} className="home__main--content">
            <Story />
            <Post
              nickname="khanh2142"
              avatar="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/01_2022/DTCL/Chibi_Jinx_Firecracker.png"
              image="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/06_2022/DTCLMua7/LinhThu/Chibi_Yasuo_Dragon.png"
              likes={1234}
              content={`Font Awesome is the internet's icon library and toolkit used by millions of designers, developers, and content creators.
                 Made with  and  in Bentonville, Boston, Chicago, Grand Rapids, Joplin, Kansas City, Seattle, Tampa, and Vergennes.`}
              comments={123}
              time={"1 day"}
            />
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
