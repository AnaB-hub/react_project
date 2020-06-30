import React from "react";

import { Spinner } from "react-bootstrap";

import "./Loader.css";

function Loader({ loader }) {
  return (
    <div className="loader">
      {loader && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}

export default Loader;
