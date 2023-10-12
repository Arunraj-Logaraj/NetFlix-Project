import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MY_API_KEY, TMDB_BASE_URL } from "./../utils/constant";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  movies: [],
  generesLoaded: false,
  genres: [],
  movieItem: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export const getGenres = createAsyncThunk("netflix/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${MY_API_KEY}`
  );
  //   console.log("values", genres);
  return genres;
});

const arrayOfMovieData = (array, moviesArray, generes) => {
  array.forEach((movie) => {
    const moviesGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = generes.find(({ id }) => id === genre);
      if (name) moviesGenres.push(name.name);
    });
    if (movie.backdrop_path)
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: moviesGenres.slice(0, 3),
      });
  });
};

const getMovieData = async (api, genres, paging = false) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 80 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    arrayOfMovieData(results, moviesArray, genres);
  }
  return moviesArray;
};

export const fetchMovies = createAsyncThunk(
  "netflix/trending",
  async ({ type }, myThunk) => {
    const {
      netflix: { genres },
    } = myThunk.getState();
    return getMovieData(
      `${TMDB_BASE_URL}/trending/${type}/week?api_key=${MY_API_KEY}`,
      genres,
      true
    );
  }
);

const NetFlixSlice = createSlice({
  name: "Netflix",
  initialState: initialState,
  reducers: {
    setAddMoviesList(state, action) {
      // const itemIndex = state.movieItem.find(
      //   (item) => item.id === action.payload.id
      // );
      const itemIndex = { ...action.payload };
      state.movieItem.push(itemIndex);
      toast.success("Added See In MyList");
      // console.log("itemIndex", state.movieItem.push(itemIndex));
      // if (itemIndex) {
      //   state.movieItem[itemIndex] = state.movieItem[itemIndex] + 1;
      //   // toast.success("Item QTY increment");
      // } else {
      //   const temp = {
      //     ...action.payload,
      //     cartQuantity: 1,
      //   };
      //   state.movieItem.push(temp);
      //   // toast.success(`${action.payload.title} added to Cart`);
      // }
      localStorage.setItem("cart", JSON.stringify(state.movieItem));
    },
    setRemoveMovieList(state, action) {
      const removeItem = state.movieItem.filter(
        (item) => item.id !== action.payload.id
      );
      state.movieItem = removeItem;
      toast.success("Deleted");

      localStorage.setItem("cart", JSON.stringify(state.movieItem));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.generesLoaded = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const { setAddMoviesList, setRemoveMovieList } = NetFlixSlice.actions;

export default NetFlixSlice.reducer;
