import React, { FC } from "react";
import { Social } from "../../common";

export const Footer: FC = () => {
  return (
    <>
      <span className="mb-5">
        <Social github="github" linkedin="linkedin" telegram="telegram" />
      </span>
    </>
  );
};
