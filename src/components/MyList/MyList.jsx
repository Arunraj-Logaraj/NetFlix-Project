import React from "react";
import "./MyList.scss";
import { useSelector, useDispatch } from "react-redux";
import MyListItem from "./MyListItem";
import { useNavigate } from "react-router-dom";
import TopNav from "../TopNav/TopNav";

const MyList = () => {
  const navigate = useNavigate();
  const movieItem = useSelector((state) => state.netflix.movieItem);
  // console.log("dsdfsdsdsd", movieItem);
  return (
    <div className="movieList">
      <TopNav />

      {movieItem.length <= 0 ? (
        <div className="noMoreList">
          <h1>No Data Found</h1>
          <button onClick={() => navigate("/hero")}>Back to the Home</button>
        </div>
      ) : (
        <div className="parentdataMovieList">
          {movieItem.map((item, index) => (
            <MyListItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyList;
