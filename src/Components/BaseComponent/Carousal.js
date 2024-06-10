import React, { useState } from "react";

export const Carousel = ({ images }) => {
  const even = images.length % 2 === 0;
  const [activeIndex, setActiveIndex] = useState(Math.floor(images.length / 2));
  const [transform, setTransform] = useState(even ? -250 : 0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="carousel">
      <ul
        className={even ? "even" : undefined}
        style={{
          transform: `translateX(${transform}px)`,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "red",
        }}
      >
        {images.map((image, index) => (
          <li
            key={index}
            className={index === activeIndex ? "active" : undefined}
          >
            <a href={image.url}>
              <img src={image.src} alt={image.alt} height={500} width={500} />
            </a>
          </li>
        ))}
      </ul>
      <div className="arrows">
        <button onClick={handlePrevClick}>Pre</button>
        <button onClick={handleNextClick}>Nxt</button>
      </div>
    </div>
  );
};
