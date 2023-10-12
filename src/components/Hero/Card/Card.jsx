import React, { useState } from "react";
import "./Card.scss";
import { useNavigate } from "react-router-dom";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { setAddMoviesList } from "../../../store";
import { useDispatch, useSelector } from "react-redux";

export default React.memo(function Card({ movieData }) {
  const [onHovered, setOnHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movieItem = useSelector((state) => state.netflix.movieItem);

  const { id, image, name, genres } = movieData;

  const addToCard = () => {
    // console.log("arunraj");
    const item = {
      id,
      image,
      name,
      genres,
    };
    console.log(item);
    dispatch(setAddMoviesList(item));
  };

  console.log("movieItem", movieItem);

  return (
    <div
      className="cardcontainer"
      onMouseEnter={() => setOnHovered(true)}
      onMouseLeave={() => setOnHovered(false)}
    >
      <img
        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU"
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="movie poster"
        onClick={() => navigate("/player")}
      />
      {onHovered && (
        <div className="hover">
          <div className="image-video-wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="movie poster"
              onClick={() => navigate("/player")}
            />
          </div>
          <div className="info-container">
            <h3 className="movieName" onClick={() => navigate("/player")}>
              {movieData.name}
            </h3>
            <div className="icons">
              <div className="controls">
                <IoPlayCircleSharp
                  title="play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbUpFill title="like" />
                <RiThumbDownFill title="Dis like" />
                <BsCheck title="Remove from  List" />
                <AiOutlinePlus
                  title="Add to my List"
                  onClick={() => addToCard()}
                />
              </div>
              <div className="info">
                <BiChevronDown title="More Info" />
              </div>
            </div>
            <div className="genres">
              <ul>
                {movieData.genres.map((genre) => {
                  <li>{genre}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
