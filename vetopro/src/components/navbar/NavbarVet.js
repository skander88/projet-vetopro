import React from "react";
import logo from "../images + logos/logo.png";
import "./Navbar.css";

const Navbar = ({ vet, logout }) => {
  return (
    <div>
      <>
        <nav>
          <div className="wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <ul className="nav-links">
              <label htmlFor="close-btn" className="btn close-btn">
                <i className="fas fa-times" />
              </label>
              <li>
                <a href="#">Modifier mon profil</a>
              </li>
              <li>
                <a href="#">Ajouter des annonces</a>
              </li>

              <li>
                <a href="#" onClick={() => logout()}>
                  Logout
                </a>
              </li>
              <li>
                <a>{vet.name}</a>
              </li>
              {/*<li>
                <button className="button-8" >
                  
                </button>
              </li>*/}
            </ul>
            <label htmlFor="menu-btn" className="btn menu-btn">
              <i className="fas fa-bars" />
            </label>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Navbar;
