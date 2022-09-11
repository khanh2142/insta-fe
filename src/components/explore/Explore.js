import { Container } from "@mui/material";
import React from "react";

import "../../styles/explore/explore.css";

import data from "../../components/home/data.json";

const Explore = () => {
  return (
    <div className="explore__container">
      <Container className="explore__container--grid">
        <div className="explore__container--galery">
          <img
            src={data[0].image}
            className="galery__item galery__item--1"
          ></img>
          <img
            src={data[0].image}
            className="galery__item galery__item--2"
          ></img>
          <img
            src={data[0].image}
            className="galery__item galery__item--3"
          ></img>
          <img
            src={data[0].image}
            className="galery__item galery__item--4"
          ></img>
          <img
            src={data[0].image}
            className="galery__item galery__item--5"
          ></img>
        </div>
        <div className="explore__container--galery">
          <img
            src={data[0].image}
            className="galery__item galery__item--1"
          ></img>
          <img
            src={data[0].image}
            className="galery__item galery__item--2"
          ></img>
          <img
            src={data[0].image}
            className="galery__item galery__item--3"
          ></img>
          <img
            src={data[0].image}
            className="galery__item galery__item--4"
          ></img>
          <img
            src={data[0].image}
            className="galery__item galery__item--5"
          ></img>
        </div>
      </Container>
    </div>
  );
};

export default Explore;
