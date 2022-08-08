import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar ">
      <ul>
        <li className="">Dashboard</li>
        <li>
          <Link to="/">Películas</Link>
        </li>
        <li>Turnos</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
