import React, { useState } from "react";
import "./Nv.css";
import { postAnnonce } from "../../api/annonceApi";
import { useNavigate } from "react-router-dom";

const NvAnnonce = () => {
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [prix, setPrix] = useState("");
  const [desc, setDesc] = useState("");
  const [loc, setLoc] = useState("");
  const [phone, setPhone] = useState("");

  const handleReset = () => {
    setName("");
    setPrix("");
    setDesc("");
    setLoc("");
    setPhone("");
    setSelectedService("");
  };

  const handleIconClick = (service) => {
    setSelectedService(service);
  };

  const navigate = useNavigate();
  const ajout = async (value) => {
    await postAnnonce(value);
    navigate("/PrivateRoute2");
  };

  return (
    <div className="body2003">
      <section id="contact">
        <h1 className="section-header">Nouvelle Annonce</h1>
        <div className="contact-wrapper">
          <form id="contact-form" className="form-horizontal" role="form">
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Nom du service"
                  name="name"
                  value={name}
                  required=""
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="prix"
                  placeholder="Prix"
                  name="prix"
                  value={prix}
                  required=""
                  onChange={(e) => setPrix(e.target.value)}
                />
              </div>
            </div>
            <textarea
              className="form-control"
              rows={10}
              placeholder="Description"
              name="message"
              value={desc}
              required=""
              onChange={(e) => setDesc(e.target.value)}
            />

            <div className="button-container">
              <button
                className="btn btn-primary send-button seventy-percent"
                id="submit"
                onClick={() =>
                  ajout({
                    name,
                    prix,
                    desc,
                    loc,
                    phone,
                    selectedService,
                  })
                }
              >
                <div className="alt-send-button">
                  <i className="fa fa-paper-plane" />
                  <span className="send-text">Envoyer</span>
                </div>
              </button>{" "}
              <button
                className="btn btn-primary send-button white-button"
                id="submit"
                type="reset"
                onClick={handleReset}
              >
                <div className="alt-send-button">
                  <i className="fa fa-paper-plane" />
                  <span className="send-text">Annuler</span>
                </div>
              </button>
            </div>
          </form>

          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <form className="form-horizontal" role="form">
                  <div className="form-group">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        placeholder="Location"
                        name="location"
                        value={loc}
                        required=""
                        onChange={(e) => setLoc(e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              </li>
              <li className="list-item">
                <form className="form-horizontal" role="form">
                  <div className="form-group">
                    <div className="col-sm-12">
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Phone"
                        name="phone"
                        value={phone}
                        required=""
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              </li>
              <li className="list-item"></li>
              <li className="list-item">
                <form className="form-horizontal" role="form">
                  <div className="form-group">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        id="service"
                        placeholder="Service"
                        name="service"
                        value={selectedService}
                        required=""
                        disabled
                      />
                    </div>
                  </div>
                </form>
              </li>
            </ul>
            <hr />
            <div className="copyright">Cliquez sur le service</div>
            <ul className="social-media-list">
              <li>
                <a
                  href="#"
                  className="contact-icon"
                  onClick={() =>
                    handleIconClick("Consultation chez le Véterinaire")
                  }
                >
                  <img
                    src="https://static.thenounproject.com/png/4553416-200.png"
                    alt="Consultation chez le Véterinaire"
                    style={{ width: "40px", height: "40px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="contact-icon"
                  onClick={() =>
                    handleIconClick("Toilettage chez le Véterinaire")
                  }
                >
                  <img
                    src="https://static.thenounproject.com/png/4553412-200.png"
                    alt="Toilettage chez le Véterinaire"
                    style={{ width: "40px", height: "40px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="contact-icon"
                  onClick={() => handleIconClick("Consultation à domicile")}
                >
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/veterinary-5992774-5047565.png?f=webp&w=128"
                    alt="Consultation à domicile"
                    style={{ width: "40px", height: "40px" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="contact-icon"
                  onClick={() => handleIconClick("Toilettage à domicile")}
                >
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pet-grooming-4045681-3341852.png"
                    alt="Toilettage à domicile"
                    style={{ width: "40px", height: "40px" }}
                  />
                </a>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NvAnnonce;
