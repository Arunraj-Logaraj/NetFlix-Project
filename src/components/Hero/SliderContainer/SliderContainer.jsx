import React from "react";
import MovieSlider from "./../MovieSlider/MovieSlider";
import "./SliderContainer.scss";

const SliderContainer = ({ movies }) => {
  const getData = (start, end) => {
    return movies.slice(start, end);
  };

  return (
    <div className="silderContainer">
      <MovieSlider data={getData(0, 10)} title="Only On NetFlix" />
      <MovieSlider data={getData(10, 20)} title="Trending now" />
      <MovieSlider data={getData(20, 30)} title="Popular On NetFlix" />
      <MovieSlider data={getData(30, 40)} title="Romantic Movies" />
      <MovieSlider data={getData(40, 50)} title="Epic" />
      <MovieSlider data={getData(50, 60)} title="New Release" />
      <MovieSlider data={getData(60, 70)} title="Action Movies" />
      <MovieSlider data={getData(70, 80)} title="Only On NetFlix" />
    </div>
  );
};

export default SliderContainer;
