import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loader.style.css";

const Loader = () => {
  return (
    <div className="spinner-area">
      <Spinner className="custom-spinner" animation="border" />
    </div>
  );
};

export default Loader;
