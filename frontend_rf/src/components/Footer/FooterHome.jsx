import React from "react";
import { Link } from "react-router-dom";
import logochico from "../../assets/images/logochico.png";
import "./footerhome.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const FooterHome = () => {
  return (
    <footer
      style={{
        width: "100vw",
        backgroundColor: "#DBD2C9",
        height: "14vh",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="footer"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr 3fr",
          alignContent: "flex-start",
          alignItems: "center",
          padding: "10px 15px",
        }}
      >
        <img src={logochico} alt="Logo" />

        <div
          style={{
            gridColumn: "span 1",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "35px",
            }}
            className="contact"
          >
            <h4
              style={{
                fontFamily: "PoppinsMedium",
                fontSize: "13px",
                fontWeight: "300",
                margin: "5px",
              }}
            >
              Lennox 2308, Funes
            </h4>
            <h4
              style={{
                fontFamily: "PoppinsMedium",
                fontSize: "13px",
                fontWeight: "300",
                margin: "5px",
              }}
            >
              3413286880
            </h4>
            <div style={{ margin: "5px", display: "flex", gap: "7px" }}>
              <a href="https://web.facebook.com/epicureos.funes">
                <FaFacebookF />
              </a>

              <a href="https://www.instagram.com/epicureos.funes/">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div style={{ gridColumn: "span 1" }} className="info">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "35px",
              fontFamily: "PoppinsMedium",
              fontSize: "13px",
              fontWeight: "300",
            }}
            className="contact"
          >
            <Link style={{ margin: "5px" }} to="/reserve">
              Reservar
            </Link>
            <Link style={{ margin: "5px" }} to="/reserve">
              Nuestra Carta
            </Link>

            <Link style={{ margin: "5px" }} to="/reserve">
              Sobre Nosotros
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;