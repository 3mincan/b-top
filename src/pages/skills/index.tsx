import React, { FC } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";

export const Skills: FC = () => {
  return (
    <>
      <div className="m-3">
        <FontAwesomeIcon icon={faJsSquare} size="3x" />
      </div>
      <div className="m-3">
        <FontAwesomeIcon icon={faReact} size="3x" />
      </div>
    </>
  );
};
