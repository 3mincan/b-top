import React, { FC } from "react";
import { Social } from "../../common";

export const Footer: FC = () => {
  return (
    <>
      <span className="fixed-bottom mb-5">
        <Social github="3mincan" linkedin="edemirkaya" telegram="edemirkaya" />
      </span>
    </>
  );
};
