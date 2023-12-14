import React from "react";
import "./PasLogin.css";
import { useNavigate } from "react-router-dom";

function PasLogin() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <center>
          <h1>Choisissez votre Role : </h1>
        </center>
      </header>
      <div className="body77">
        <div className="aligner">
          <figure
            style={{ "--c": "#fff5" }}
            onClick={() => navigate("/loginClient")}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/8334/8334198.png"
              alt="clients"
            />
            <figcaption>Client</figcaption>
          </figure>
          <figure
            style={{ "--c": "#fff5" }}
            onClick={() => navigate("/loginVet")}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3611/3611419.png"
              alt="vets"
            />
            <figcaption>Veterinaire</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default PasLogin;
