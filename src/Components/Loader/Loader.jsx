/* eslint-disable react/style-prop-object */
import React from "react";
import "./Loader.css";

function Loader() {
  return(
    <div className="caixa">
        <div className="loader">
            <span style="--i:1"></span>
        </div>
    </div>
  );
}

export default Loader;