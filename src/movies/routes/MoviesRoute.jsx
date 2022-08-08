import { Route, Routes } from "react-router-dom";
import MovieMainPage from "../pages/MovieMainPage";

const MoviesPaths = () => {
  // Routes => High order components

  return (
    <Routes>
      <Route path="/" element={<MovieMainPage />} />
    </Routes>
  );
};

export default MoviesPaths;
