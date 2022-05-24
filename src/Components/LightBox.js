import React, { useState, useEffect } from "react";
import "./lightBox.css";

export default function LightBox() {
  const [bigPic, setBigPic] = useState("");
  const images = [
    { src: "./images/products/saw-test01.png" },
    { src: "./images/products/saw-test02.png" },
    { src: "./images/products/saw-test03.png" },
  ];

  useEffect(() => {
    if (images) {
      setBigPic(images[0].src);
    } else {
    }
  }, []);
  return (
    <>
      <div className=" container col-12" style={{ backgroundColor: "grey" }}>
        <div className="main col-4 order-last">
          <div className="bigPic-container">
            <img className="big-pic" src={bigPic} />
          </div>
          <div className="row thumbnails col-12">
            {images
              ? images.map((e) => {
                  return (
                    <img
                      src={e.src}
                      className="thumbnail"
                      onClick={() => setBigPic(e.src)}
                      style={{ opacity: bigPic == e.src ? "100%" : "50%" }}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
