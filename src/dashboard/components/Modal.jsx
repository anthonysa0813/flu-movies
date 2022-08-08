import { Button } from "antd";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Message from "../../Components/Message";
import { getMoviesThunk } from "../../store/slices/movies/thunks";
import { deleteMovie, editMovie } from "../../store/slices/moviesSlice";

const Modal = ({ setShowModal, initialState, method = "get" }) => {
  const [currentMovie, setCurrentMovie] = useState(initialState);
  const dispatch = useDispatch();
  const methodFunction = {
    get: getMoviesThunk,
    edit: editMovie,
    delete: deleteMovie,
  };

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { nombre, fecha, estado } = currentMovie;

  const closeModal = () => {
    setShowModal((state) => {
      return !state;
    });
  };

  const handleChange = (e) => {
    setCurrentMovie({
      ...currentMovie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, fecha, estado].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    // hacer la petición hacia la API
    dispatch(methodFunction[method]({ nombre, fecha, estado }));

    setTimeout(() => {
      setShowModal((state) => {
        return !state;
      });
    }, 1500);
  };

  return (
    <div className="modalContainer">
      <form onSubmit={handleSubmit}>
        <div className="close">
          <span onClick={closeModal}>X</span>
        </div>
        <h4>Nueva Película</h4>

        {error && (
          <Message type="danger">
            <p>Todos los campos son requeridos...</p>
          </Message>
        )}

        <div className="field ">
          <label>Nombre de Película</label>
          <input
            type="text"
            value={nombre}
            name="nombre"
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Fecha de Publicación</label>
          <input
            type="date"
            name="fecha"
            value={fecha}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Estado</label>
          <select name="estado" value={estado} onChange={handleChange}>
            <option value="">--Seleccione--</option>
            <option value="activo">activo</option>
            <option value="inactivo">inactivo</option>
          </select>
        </div>
        <div className="field">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
