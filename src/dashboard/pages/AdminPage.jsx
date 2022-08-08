import React from "react";
import Header from "../components/Header";
import MainView from "../components/MainView";
import Sidebar from "../components/Sidebar";
import "../styles/index.css";

const AdminPage = () => {
  return (
    <div className="dashboardGrid">
      {/* header */}
      <Header />
      {/* sidebar */}
      <Sidebar />
      {/* main */}
      <MainView />
    </div>
  );
};

export default AdminPage;
