import { configureStore } from "@reduxjs/toolkit";
import NetFlixSlice from "./index";

const store = configureStore({
  reducer: {
    netflix: NetFlixSlice,
  },
});

export default store;
