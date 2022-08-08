import axios from "axios";
import { getMovies, startLoadingMovies } from "../moviesSlice";

// import { startLoadingMovies, getMovies } from "./pokemonSlice";

export const getMoviesThunk = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingMovies());

    //! petición http

    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=Batman&page=2&apiKey=511897bf`
    );

    console.log({ data });

    dispatch(getMovies({ movies: data }));
  };
};
