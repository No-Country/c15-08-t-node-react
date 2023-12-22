import React from "react";
import { Link } from "react-router-dom";
import logochico from "../../assets/images/logochico.png";
import './footerhome.css'; // Adjust the path if needed
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import LayoutGrid3 from "../LayoutGrid/LayoutGrid";



const FooterHome = () => {
  return (
    <footer className="footer" >
      <div className="footer-content" style={{ backgroundColor: "#DBD2C9" }}>
        <LayoutGrid3>
          
          <img src={logochico} alt="Logo" />

         <div>
          <div className="contact">
            <ul className="info-contacts">
              <li>
              
                <span>Lennox 2308, Funes</span>
              </li>
              <li>
              
                <span>3413286880</span>
              </li>
                <ul>
                  <li>
                    <a href="https://web.facebook.com/epicureos.funes">
                     <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/epicureos.funes/">
                     <FaInstagram />
                    </a>
                  </li>
                </ul>
            </ul>
          </div>
          </div>
          <div className="info">
            <ul className="info-links">
              <li><Link to="/reserve">Reservar</Link></li>
              <li><Link to="/menu">Nuestra Carta</Link></li>
              <li><Link to="/about">Sobre Nosotros</Link></li>
            </ul>
          </div>
         
          </LayoutGrid3>
        </div>
    </footer>
  );
};

export default FooterHome;