import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRemoveMovieList } from "../../store";

const MyListItem = ({ item: { id, name, image, genres } }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(
      setRemoveMovieList({
        id,
        name,
        image,
        genres,
      })
    );
  };

  return (
    <div key={id} className="dataMovieList">
      <h2>{name}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="movie poster" />
      <ul>
        <li>{genres}</li>
      </ul>
      <button onClick={removeItem}>Delete</button>
    </div>
  );
};

export default MyListItem;
