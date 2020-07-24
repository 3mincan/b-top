import React, { FC } from "react";
import "./style.scss";
import { Stackoverflow } from "../../api";

export const About: FC = () => {
  return (
    <>
      <h1 className="h2 font-weight-bold my-5">About</h1>
      <p>NASA APOD Api</p>
      <p>Github Api</p>
      <p>dev.to api</p>
      <p>formspree.io api</p>
      <Stackoverflow id="2761949" />
    </>
  );
};
