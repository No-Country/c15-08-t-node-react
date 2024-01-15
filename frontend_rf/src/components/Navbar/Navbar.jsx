// @ts-nocheck
import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import ImageEpicureos from "../ImageEpicureos/ImageEpicureos";
import { useNavigate } from "react-router-dom";
function Navbar({ userLoggedIn, setUserLoggedIn }) {
  let navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");

  const handleLogOut = () => {
    localStorage.clear();
    setUserLoggedIn(false);
    navigate("/home");
  };

  useEffect(() => {
    if (userLoggedIn) {
      setName(
        JSON.parse(localStorage.getItem("user"))?.firstname?.toLowerCase()
      );
      setUserId(JSON.parse(localStorage.getItem("user"))?.id);
    }
  }, [userLoggedIn]);

  return (
    <nav
      onMouseLeave={() => {
        setOpenMenu(false);
      }}
    >
      <ImageEpicureos size="max(90%, 45px)" />
      <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <ul className={openMenu ? "open" : ""}>
        <li onClick={() => setOpenMenu(false)}>
          <Link to={"/home"}>Inicio</Link>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <Link to={"/menu"}>Menú</Link>
        </li>
        {userLoggedIn && localStorage !== null ? (
          <>
            <li onClick={() => setOpenMenu(false)}>
              <Link to={`/reservations/${userId}`}>Mis reservas</Link>
            </li>
            <li onClick={() => setOpenMenu(false)}>
              <Link to={`/profile/${userId}`}>Mis datos</Link>
            </li>
            <li onClick={handleLogOut}>
              <Link to={`/home`}>Cerrar sesión</Link>
            </li>
          </>
        ) : (
          <li onClick={() => setOpenMenu(false)}>
            <Link to={"/login"}>Iniciar sesión</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
