import React from "react";
import { useState } from "react";

const Loading = ({ item }) => {
  const [count, setCount] = useState(5);
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "50vh", width: "180vh" }}
      >
        <h1>Image is Loading</h1>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
