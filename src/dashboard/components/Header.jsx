import React from "react";

const Header = () => {
  return (
    <header className="header ">
      <h1>header</h1>
      <div className="userAdmin">
        <div className="userImage">
          <img
            src="https://res.cloudinary.com/dzgbz8lvg/image/upload/v1648791111/darlene_gduffo.png"
            alt=""
          />
        </div>
        <div className="nameUser">
          <h3>Name User</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
