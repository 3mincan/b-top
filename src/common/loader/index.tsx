import React, { FC } from "react";
import Spinner from "react-bootstrap/Spinner";

export const Loader: FC = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Spinner animation="border" />
      </div>
    </>
  );
};
