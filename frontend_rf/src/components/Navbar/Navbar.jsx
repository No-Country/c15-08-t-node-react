// @ts-nocheck
import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import ImageEpicureos from "../ImageEpicureos/ImageEpicureos";
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
      <ImageEpicureos size="max(100%, 60px)" />
      <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
        <ion-icon name="menu-outline"></ion-icon>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
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
