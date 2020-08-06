import React, { FC } from "react";
import { DevTo } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../common";

export const Articles: FC = () => {
  return (
    <>
      <h1 className="flex-fill font-weight-bold h2 my-5">
        <FontAwesomeIcon icon={faNewspaper} />
        <span className="m-3">Articles</span>
      </h1>
      <DevTo username="3mincan" />
      <Footer />
    </>
  );
};
