import { MoviesSlice } from "./slices/moviesSlice";

// store/store.js

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    movies: MoviesSlice.reducer,
  },
});
