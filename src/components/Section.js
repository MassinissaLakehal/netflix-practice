import React from "react";

const Section = ({ category, images }) => {
  return (
    <div className="category">
      <h2>{category}</h2>
      <div className="imgCarousel">
        {images.map((image, index) => {
          return (
            <img
              className="movieImg"
              key={index}
              src={image}
              alt="netflix-movie"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section;
