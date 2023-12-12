// @ts-nocheck
import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import ImageEpicureos from "../ImageEpicureos/ImageEpicureos";
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav
      onMouseLeave={() => {
        setOpenMenu(false);
        console.log(JSON.parse(localStorage.getItem("user")).firstname);
      }}
    >
      <ImageEpicureos size="max(90%, 50px)" />
      <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <h3>
        Bienvenido,{" "}
        <span
          style={{
            fontWeight: 700,
            fontFamily: "PoppinsMedium",
            textDecoration: "underline",
          }}
        >
          {JSON.parse(localStorage.getItem("user")).firstname.toLowerCase()}
        </span>
      </h3>
      <ul className={openMenu ? "open" : ""}>
        <li onClick={() => setOpenMenu(false)}>
          <Link to={"/home"}>Inicio</Link>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <Link to={undefined}>Menú</Link>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <Link to={"/reserve"}>Reservar</Link>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <Link to={undefined}>Perfil</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
