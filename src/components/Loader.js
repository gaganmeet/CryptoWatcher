import React from "react";
import loader from "../images/loader.svg";

const Loader = () => {
  return (
    <div className="loader">
      <img
        src={loader}
        width="10%"
        style={{
          color: "black",
        }}
        alt="loader"
      />
    </div>
  );
};

export default Loader;
