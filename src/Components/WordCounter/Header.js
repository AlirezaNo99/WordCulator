import "./wordCounter.css";
import React, { useState, useEffect } from "react";

function Header() {
  return (
    <>
      <div className="header1">
        <div className="container">
          <div className="row col-12">
            {" "}
            <div className="col-12 col-md-3 order-first">
              <h1 className="branding">WordCulator</h1>
            </div>
            <div className="col-sm-9"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
