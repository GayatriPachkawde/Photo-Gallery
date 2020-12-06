import React, { useState } from "react";
import "./imageStyle.css";

const ImageComponent = (props) => {
  const [showComment, setshowComment] = useState(false);
  const addComment = () => {
    setshowComment(true);
  };

  return (
    <>
      <div className="image-holder">
        <button className="btn" onClick={props.clicked}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <img className="img" src={props.imgSrc} alt={props.alt} />
        <div className="comment-box">
          {showComment ? (
            <div className="comment">{props.comment}</div>
          ) : (
            <>
              <input
                placeholder="Comment something..."
                onChange={props.change}
              />
              <button className="add-btn" onClick={addComment}>
                <i className="fa fa-check" aria-hidden="true"></i>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageComponent;
