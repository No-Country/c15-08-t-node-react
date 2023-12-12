// @ts-nocheck
import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import ImageEpicureos from "../ImageEpicureos/ImageEpicureos";
function Navbar({ userLoggedIn }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    setName(JSON.parse(localStorage.getItem("user"))?.firstname?.toLowerCase());
  }, [userLoggedIn]);
  return (
    <nav
      onMouseLeave={() => {
        setOpenMenu(false);
      }}
    >
      <ImageEpicureos size="max(90%, 50px)" />
      <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <h3>
        Bienvenido!{" "}
        <span
          style={{
            fontWeight: 700,
            fontFamily: "PoppinsMedium",
            textDecoration: "underline",
          }}
        >
          {name}
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
