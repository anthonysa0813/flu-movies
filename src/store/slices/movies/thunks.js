import axios from "axios";
import { getMovies, startLoadingMovies } from "../moviesSlice";

// import { startLoadingMovies, getMovies } from "./pokemonSlice";

export const getMoviesThunk = (dataObject) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingMovies());

    //! petición http

    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${dataObject.nombre}&page=2&apiKey=511897bf`
    );

    const { Search } = data;
    console.log({ Search: Search[2].Poster });
    const newMovie = {
      id: new Date().getTime().toString(36),
      nombre: dataObject.nombre,
      fecha: dataObject.fecha,
      estado: dataObject.estado,
      photo: Search[2].Poster,
    };

    dispatch(getMovies({ movies: newMovie }));
  };
};
