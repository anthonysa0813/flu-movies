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
      state.moviesData = [...state.moviesData, action.payload.movies];
    },
    editMovie: (state, action) => {
      const movieFilter = state.moviesData.filter(
        (m) => m.id !== action.payload.movies.id
      );
      console.log(movieFilter);
    },
    deleteMovie: (state, action) => {
      const movieArr = state.moviesData.map(
        (movie) => movie.id !== action.payload.id
      );
      console.log({ movieArr });
      state.moviesData = movieArr;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingMovies, deleteMovie, getMovies, editMovie } =
  MoviesSlice.actions;
