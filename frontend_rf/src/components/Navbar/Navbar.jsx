// @ts-nocheck
import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import ImageEpicureos from "../ImageEpicureos/ImageEpicureos";
function Navbar({ userLoggedIn }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    console.log(localStorage.getItem("user"));
    if (userLoggedIn) {
      console.log("valid");
      setName(
        JSON.parse(localStorage.getItem("user"))?.firstname?.toLowerCase()
      );
      setUserId(JSON.parse(localStorage.getItem("user"))?.id);
    }
    setUserId(undefined);
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
          <Link to={"/home"}>Menú</Link>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <Link to={"/reserve"}>Reservar</Link>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <Link to={`/profile/${userId}`}>Perfil</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
