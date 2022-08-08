import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/movies.css";

const MovieMainPage = () => {
  const { movies } = useSelector((state) => state);
  const { moviesData } = movies;
  useEffect(() => {
    console.log({ moviesData });
  }, []);

  return (
    <div className="moviesGrid">
      <div className="menu p-2">
        <h1>MoviesApp</h1>
        <ul>
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
          <li>Turnos</li>
          <li>Ranking</li>
        </ul>
      </div>
      <div className="main ">
        <h1 className="text-center">Librería de Películas</h1>
        <div className="mainGrid">
          {moviesData?.map((card) => {
            return (
              <div className="card-movie">
                <div className="movieImage">
                  <img src={card.photo} alt="" />
                </div>
                <div className="movieInfo">
                  <h4 style={{ color: "white" }}>{card.nombre}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieMainPage;
