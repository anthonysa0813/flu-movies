import React from "react";

const Modal = ({ setShowModal }) => {
  const closeModal = () => {
    setShowModal((state) => {
      return !state;
    });
  };

  return (
    <div className="modalContainer">
      <form>
        <div className="close">
          <span onClick={closeModal}>X</span>
        </div>
        <h4>Nueva Película</h4>

        <div className="field ">
          <label>Nombre de Película</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Fecha de Publicación</label>
          <input type="date" />
        </div>
        <div className="field">
          <label>Estado</label>
          <select>
            <option value="">--Seleccione--</option>
            <option value="activo">activo</option>
            <option value="inactivo">inactivo</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Modal;
