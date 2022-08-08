import React, { useState, useEffect } from "react";
import { Button, Space, Table } from "antd";
import { getMoviesThunk } from "../../store/slices/movies/thunks.js";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Column from "antd/lib/table/Column.js";
import { deleteMovie, editMovie } from "../../store/slices/moviesSlice.js";

const MainView = () => {
  const {
    movies: { moviesData },
  } = useSelector((state) => state);
  const [showModal, setShowModal] = useState(false);
  const [method, setMethod] = useState("get");

  const [movieState, setMovieState] = useState({
    nombre: "",
    fecha: "",
    estado: "",
  });

  const dispatch = useDispatch();
  console.log(moviesData);
  const dataSource = moviesData;

  useEffect(() => {
    dispatch(getMoviesThunk());
  }, []);

  const handleShowModal = () => {
    console.log({ showModal });
    setShowModal(!showModal);
  };

  const edit = (movie) => {
    setShowModal(!showModal);
    setMovieState(movie);
    setMethod("edit");
  };

  return (
    <>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          initialState={movieState}
          method={method}
        />
      )}
      <main className="MainViewContainer">
        <div className="mainHead">
          <h3>Películas</h3>
          <Button type="primary" onClick={handleShowModal}>
            Nueva
          </Button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Nombre</th>
              <th scope="col">F.publicación</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {dataSource.map((movie) => {
              return (
                <tr>
                  <th scope="row">{movie.id}</th>
                  <td>{movie.nombre}</td>
                  <td>{movie.fecha}</td>
                  <td>{movie.estado}</td>
                  <td>
                    <button
                      className="btn btn-warning mx-2"
                      onClick={() => edit(movie)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(deleteMovie(movie.id))}
                    >
                      Elminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default MainView;
