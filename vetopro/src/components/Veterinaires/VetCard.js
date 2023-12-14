import React from "react";
import "./Vetcard.css";
import { useNavigate } from "react-router-dom";
const VetCard = ({ mini, getAll }) => {
  const navigate = useNavigate();
  const renderCabinetAddress = () => {
    return mini.cabAdresse === "" ? null : (
      <h3>Cabinet Addresse: {mini.cabAdresse}</h3>
    );
  };
  const renderServices = () => {
    return mini.services === "" ? null : <h3>Services :{mini.services}</h3>;
  };
  const renderDescription = () => {
    return mini.description === "" ? null : <p>{mini.description}</p>;
  };
  return (
    <div>
      <section className="articles">
        <article>
          <div className="artbody">
            <div className="article-wrapper">
              <figure>
                <img src={mini.photo} alt="foto" />
              </figure>
              <div className="article-body">
                <h1>
                  {mini.name} {mini.lastName}
                </h1>
                <h3>Age : {mini.age} ans</h3>
                <h3>Numéro d'ordre : {mini.numordre}</h3>
                {renderCabinetAddress()}
                <h3>Tel : {mini.tel}</h3>
                {renderServices()}
                {renderDescription()}

                <a
                  href="#"
                  className="read-more"
                  onClick={() => {
                    navigate(`/rdv/${mini._id}`);
                  }}
                >
                  Prendre un Rendez-vouz
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>
      ;
    </div>
  );
};

export default VetCard;
