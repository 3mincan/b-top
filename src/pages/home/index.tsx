import React, { FC } from "react";
import { Github } from "../../api";
import { Social } from "../../common";
import "./style.scss";

export const Home: FC = () => {
  return (
    <>
      <Github username="3mincan" />
      <Social github="3mincan" linkedin="edemirkaya" telegram="edemirkaya" />
    </>
  );
};
