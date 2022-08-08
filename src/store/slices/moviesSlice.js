import { createSlice } from "@reduxjs/toolkit";

export const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    isLoading: false,
    moviesData: [],
  },
  reducers: {
    startLoadingMovies: (state /* action */) => {
      //! https://react-redux.js.org/tutorials/quick-start
      // Redux Toolkit allows us to write 'mutating' logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a 'draft state' and produces a brand new
      // immutable state based off those changes
      state.isLoading = true;
    },
    getMovies: (state, action) => {
      state.isLoading = false;
      state.moviesData = action.payload.movies;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingMovies, getMovies } = MoviesSlice.actions;
