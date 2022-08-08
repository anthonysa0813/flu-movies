import React from "react";
import { BrowserRouter } from "react-router-dom";
import DashboardRoutes from "./dashboard/routes/DashboardRoute";
import MoviesPaths from "./movies/routes/MoviesRoute";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MoviesPaths />
        <DashboardRoutes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
