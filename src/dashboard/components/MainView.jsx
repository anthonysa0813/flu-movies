import React, { useState, useEffect } from "react";
import { Button, Table } from "antd";
import { getMoviesThunk } from "../../store/slices/movies/thunks.js";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";

const MainView = () => {
  const {
    movies: { moviesData },
  } = useSelector((state) => state);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  console.log(moviesData);
  const dataSource = [];

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nombre",
      dataIndex: "Nombre",
      key: "Nombre",
    },
    {
      title: "F.publicación",
      dataIndex: "F.publicación",
      key: "F.publicación",
    },
    {
      title: "Estado",
      dataIndex: "Estado",
      key: "Estado",
    },
    {
      title: "",
      dataIndex: "",
      key: "",
    },
  ];

  useEffect(() => {
    dispatch(getMoviesThunk());
  }, []);

  const handleShowModal = () => {
    console.log({ showModal });
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} />}
      <main className="MainViewContainer">
        <div className="mainHead">
          <h3>Películas</h3>
          <Button type="primary" onClick={handleShowModal}>
            Nueva
          </Button>
        </div>
        <Table dataSource={dataSource} columns={columns} />;
        <ul>
          {/* {moviesData?.Search.map((movie) => (
            <li>{movie.Title}</li>
          ))} */}
        </ul>
      </main>
    </>
  );
};

export default MainView;
