import { useState, useEffect } from "react";
import "./Hero.scss";
import TopNav from "../TopNav/TopNav";
import SliderContainer from "./SliderContainer/SliderContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../../store";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const generesLoaded = useSelector((state) => state.netflix.generesLoaded);
  const movies = useSelector((state) => state.netflix.movies);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll == null;
  };

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (generesLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
  }, [fetchMovies, generesLoaded]);

  // console.log("isScrolled", isScrolled);

  return (
    <div className="container-hero">
      <div className="container-heroHeader">
        <TopNav isScrolled={isScrolled} />
        <div className="hero-header">
          <h1>NetFlix Movies</h1>
          <p>
            Movies move us like nothing else can, whether they’re scary, funny,
            dramatic, romantic or anywhere in-between. So many titles, so much
            to experience.
          </p>
          {/* <div className="button">
            <button className="playBtn">Count</button>
            <button className="moreBtn">More</button>
          </div> */}
        </div>
      </div>
      <div className="netFlix">
        <SliderContainer movies={movies} />
      </div>
    </div>
  );
};

export default Hero;
