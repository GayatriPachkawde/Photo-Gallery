import React, { useState } from "react";
import "./Gallery.css";

const Gallery = (props) => {
  const [imgArr, setImgArr] = useState(props.data);
  const dltImage = (index) => {
    const newArr = [...imgArr];
    newArr.splice(index, 1);
    setImgArr(newArr);
  };
  return (
    <div className="gallery">
      {imgArr.map((img, idx) => {
        return (
          <>
            <div className="image-holder">
              <button className="btn" onClick={() => dltImage(idx)}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
              <img className="img" src={img.url} alt="images" />
              <p className="title">{img.title}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Gallery;
