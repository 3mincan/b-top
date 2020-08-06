import React, { FC } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faReact,
  faHtml5,
  faAngular,
  faSass,
  faBootstrap,
  faGitSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../common";

export const Skills: FC = () => {
  return (
    <>
      <h1 className="flex-fill font-weight-bold h2 my-5">
        <FontAwesomeIcon icon={faCogs} />
        <span className="m-3">Skills</span>
      </h1>
      <div className="flex-fill my-5">
        <span className="m-3">
          <FontAwesomeIcon icon={faJsSquare} size="3x" />
        </span>
        <span className="m-3">
          <FontAwesomeIcon icon={faGitSquare} size="3x" />
        </span>
        <span className="m-3">
          <FontAwesomeIcon icon={faReact} size="3x" />
        </span>
        <span className="m-3">
          <FontAwesomeIcon icon={faHtml5} size="3x" />
        </span>
        <span className="m-3">
          <FontAwesomeIcon icon={faAngular} size="3x" />
        </span>
        <span className="m-3">
          <FontAwesomeIcon icon={faSass} size="3x" />
        </span>
        <span className="m-3">
          <FontAwesomeIcon icon={faBootstrap} size="3x" />
        </span>
      </div>
      <Footer />
    </>
  );
};
