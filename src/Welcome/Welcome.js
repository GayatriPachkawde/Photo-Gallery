import React from "react";
import "./WelcomeStyle.css";
import { Link } from "react-router-dom";
import ImageArr from "../Images/WelcomeImages";

const Welcome = () => {
  return (
    <>
      <div className="mainDiv">
        <h1 className="header">Photo Gallery</h1>

        {ImageArr.map((imgSrc, Index) => {
          return (
            <img
              src={imgSrc}
              className={`img${Index + 1}`}
              alt="decorative"
              key={`${imgSrc}${Index}`}
            />
          );
        })}
      </div>

      <Link to="/gallery">
        <button className="enter-btn">
          Explore <i className="fa fa-location-arrow" aria-hidden="true"></i>
        </button>
      </Link>
    </>
  );
};

export default Welcome;
