import React, { FC } from "react";
import { Github } from "../../api";
import "./style.scss";
import { Footer } from "../../common";

export const Home: FC = () => {
  return (
    <>
      <Github username="3mincan" />
      <Footer />
    </>
  );
};
