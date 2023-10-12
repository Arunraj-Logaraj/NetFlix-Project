import React, { useState, useRef, useEffect } from "react";
import "./MovieSlider.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "../Card/Card";

export default React.memo(function MovieSlider({ data, title }) {
  const listRef = useRef();
  const [controlVisibility, setControlVisibility] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);

  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };

  return (
    <div
      className="containerMovie"
      controlVisibility={controlVisibility}
      onMouseEnter={() => setControlVisibility(true)}
      onMouseLeave={() => setControlVisibility(false)}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div
          className={`slider-action left ${!controlVisibility ? "none" : ""} `}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className="slider" ref={listRef}>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
        </div>
        <div
          className={`slider-action right ${!controlVisibility ? "none" : ""} `}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </div>
  );
});
