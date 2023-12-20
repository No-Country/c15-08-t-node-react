import React from "react";
import { Link } from "react-router-dom";
import logochico from "../../assets/images/logochico.png";

const FooterHome = () => {
  return (
    <footer className="footer" >
      <div className="container"> {/* Added container */}
      <div className="footer-content" style={{ backgroundColor: "#DBD2C9" }}>
          <img src={logochico} alt="Logo" />
         
          <div className="contact">
            <ul>
              <li>
                <strong>Dirección:</strong>
                <span>Lennox 2308, Funes</span>
              </li>
              <li>
                <strong>Teléfono:</strong>
                <span>3413286880</span>
              </li>
              <li>
                <strong>Redes sociales:</strong>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/example">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/example">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="info">
            <ul>
              <li><Link to="/reservar">Reservar</Link></li>
              <li><Link to="/nuestracarta">Nuestra Carta</Link></li>
              <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;