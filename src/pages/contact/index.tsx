import React, { FC } from "react";
import { Formspree } from "../../api";
import { Social } from "../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Contact: FC = () => {
  return (
    <>
      <h1 className="flex-fill font-weight-bold h2 my-5">
        <FontAwesomeIcon icon={faEnvelope} />
        <span className="m-3">Contact</span>
      </h1>{" "}
      <Formspree endpoint="xlepanqk" />
      <span className="fixed-bottom mb-5">
        <Social github="3mincan" linkedin="edemirkaya" telegram="edemirkaya" />
      </span>
    </>
  );
};
