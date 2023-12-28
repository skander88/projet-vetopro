import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Login from "../login/Login";
import { fetchVet } from "../../api/vetApi";
import { setVet } from "../../store/vetSlice";
import "../homepage/Homepage.css";
import "../homepage/Homepage2.css";
import NvAnnonce from "../annonces/NvAnnonce";
import UpdateVet from "../Veterinaires/UpdateVet";

const PrivateRoute2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the Vet from Redux state
  const authVet = useSelector((state) => state.vet);

  // Fetch the authenticated Vet
  const getVet = async () => {
    try {
      const data = await fetchVet();
      dispatch(setVet(data));
    } catch (error) {
      console.error("Error fetching Vet:", error);
    }
  };

  useEffect(() => {
    getVet();
  }, []);

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      {token ? (
        <div className="body111">
          {/* Header Start */}
          {/*Navbar Start*/}
          <div className="container-fluid sticky-top bg-white shadow-sm mb-5">
            <div className="container">
              <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
                <div className="d-flex align-items-center">
                  <a
                    href="#"
                    className="navbar-brand"
                    style={{ pointerEvents: "none" }}
                  >
                    <img
                      src="/logo.png"
                      alt="Vétopro Logo"
                      style={{ width: "120px" }}
                    />
                  </a>
                </div>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav ms-auto py-0">
                    <a href="#" className="nav-item nav-link">
                      Home
                    </a>
                    <a
                      href="#"
                      className="nav-item nav-link"
                      onClick={() => navigate("/profilVet")}
                    >
                      Modifier mon profil
                    </a>
                    <a href="#ajout" className="nav-item nav-link">
                      Ajouter une annonce
                    </a>
                    <a href="#annonce" className="nav-item nav-link">
                      Voir mes annonces
                    </a>

                    <a href="#blog" className="nav-item nav-link">
                      Latest Blog
                    </a>

                    <a
                      href="#"
                      className="nav-item nav-link"
                      style={{ pointerEvents: "none" }}
                    >
                      Dr {authVet.name}
                    </a>
                    <a
                      href="#"
                      className="navbar-brand"
                      style={{ pointerEvents: "none" }}
                    >
                      <img
                        src={authVet.photo}
                        alt="Vétopro Logo"
                        style={{ width: "60px", marginLeft: "5px" }}
                      />
                    </a>
                    <a
                      href="#"
                      className="nav-item nav-link"
                      onClick={() => logout()}
                      style={{
                        width: "60px",
                        marginLeft: "-5px",
                        marginRight: "-70px",
                      }}
                    >
                      Logout
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          {/*Navbar End*/}

          {/* Header End */}
          {/* Hero Start */}
          <div
            className="container-fluid bg-primary py-5"
            style={{
              background: "url() no-repeat center center / cover",
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <h1 className="display-4 text-white mb-3">
                    The well-being of animals , Our Priority .<br /> We count on
                    you Doc !
                  </h1>
                  <p className="lead text-white mb-4">
                    We are committed to providing high-quality, compassionate
                    care to improve the health of people's beloved pet .
                  </p>

                  <a href="#services" className="btn btn-outline-light">
                    Learn More
                  </a>
                </div>
                <div className="col-lg-5 text-center">
                  <img
                    className="img-fluid"
                    src="https://assets.isu.pub/document-structure/221122033049-9a33db40979c7056c58a9bc24a86efc8/v1/18edf8864ad8932026fd1ac98750a911.jpeg"
                    alt="Hero Image"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Hero End */}
          {/* Services Start */}
          <div id="services" className="container-fluid py-5">
            <div className="container">
              <div
                className="text-center mx-auto mb-5"
                style={{ maxWidth: "500px" }}
              >
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                  Services
                </h5>
                <h1 className="display-4">Services you can provide</h1>
              </div>

              <div className="row g-5">
                {/* First row */}
                <div className="col-lg-6 col-md-12">
                  <div
                    className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                    style={{ height: "300px" }}
                  >
                    <div className="service-icon mb-3">
                      <img
                        src="https://cdn.iconscout.com/icon/premium/png-256-thumb/veterinary-5992774-5047565.png?f=webp&w=128"
                        alt="Service Icon"
                        style={{ width: "80px", height: "80px" }}
                      />
                    </div>
                    <h4 className="mb-3" style={{ fontSize: "1.5rem" }}>
                      Consultation à domicile
                    </h4>

                    <a className="btn btn-lg btn-primary rounded-pill" href="">
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div
                    className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                    style={{ height: "300px" }}
                  >
                    <div className="service-icon mb-3">
                      <img
                        src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pet-grooming-4045681-3341852.png"
                        alt="Service Icon"
                        style={{ width: "80px", height: "80px" }}
                      />
                    </div>
                    <h4 className="mb-3" style={{ fontSize: "1.5rem" }}>
                      Toilettage à domicile
                    </h4>

                    <a className="btn btn-lg btn-primary rounded-pill" href="">
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>

                {/* Second row */}
                <div className="col-lg-6 col-md-12">
                  <div
                    className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                    style={{ height: "300px" }}
                  >
                    <div className="service-icon mb-3">
                      <img
                        src="https://static.thenounproject.com/png/4553416-200.png"
                        alt="Service Icon"
                        style={{ width: "80px", height: "80px" }}
                      />
                    </div>
                    <h4 className="mb-3" style={{ fontSize: "1.5rem" }}>
                      Consultation chez le Véterinaire
                    </h4>

                    <a className="btn btn-lg btn-primary rounded-pill" href="">
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div
                    className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                    style={{ height: "300px" }}
                  >
                    <div className="service-icon mb-3">
                      <img
                        src="https://static.thenounproject.com/png/4553412-200.png"
                        alt="Service Icon"
                        style={{ width: "80px", height: "80px" }}
                      />
                    </div>
                    <h4 className="mb-3" style={{ fontSize: "1.5rem" }}>
                      Toilettage chez le Véterinaire
                    </h4>

                    <a className="btn btn-lg btn-primary rounded-pill" href="">
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services End */}
          {/* Counter Start */}
          <div className="container-fluid bg-primary py-5">
            <div className="container">
              <div className="row text-white text-center">
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <div className="counter">
                    <i className="bi bi-heart" />
                    <h2
                      className="timer count-title count-number"
                      data-to={1500}
                      data-speed={1500}
                    />
                    <p className="count-text ">Happy Patients</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <div className="counter">
                    <i className="bi bi-check" />
                    <h2
                      className="timer count-title count-number"
                      data-to={2000}
                      data-speed={2000}
                    />
                    <p className="count-text ">Successful Surgeries</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="counter">
                    <i className="bi bi-person" />
                    <h2
                      className="timer count-title count-number"
                      data-to={30}
                      data-speed={1500}
                    />
                    <p className="count-text ">Qualified Doctors</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="counter">
                    <i className="bi bi-briefcase" />
                    <h2
                      className="timer count-title count-number"
                      data-to={20}
                      data-speed={1500}
                    />
                    <p className="count-text ">Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Counter End */}
          <div id="ajout">
            <NvAnnonce />
          </div>

          {/* Blog Start */}
          <div id="blog" className="container-fluid bg-light py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                  <h2 className="display-4 mb-4">Latest Blog Posts</h2>
                  <p className="lead">
                    Stay updated with the latest tips and news from our experts.
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-4 mb-4">
                  <div className="card">
                    <img
                      src="https://www.mouss-le-chien.com/medias/images/bouledogue-francais-veterinaire-anti-puce-pipette-adobestock-90767873.jpeg"
                      className="card-img-top"
                      alt="Blog 1"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Traitement anti puce pour chien : tout ce que vous devez
                        savoir
                      </h5>
                      <p className="card-text">
                        Cet article fait partie d’un ensemble de fiches conseils
                        dédiées à la santé de votre chien. Vous pourrez
                        retrouver la plupart des produits de traitement anti
                        puces dont il est...
                      </p>
                      <a
                        href="https://www.universpara.com/blog/traitement-anti-puce-chien/"
                        className="btn btn-primary"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="card-footer">
                      <small>Blog Universpara.com</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="card">
                    <img
                      src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D"
                      className="card-img-top"
                      alt="Blog 2"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Les préférences alimentaires des propriétaires de chiens
                      </h5>
                      <p className="card-text">
                        L'enquête révèle également que la majorité des chiens
                        reçoivent deux repas par jour. Cependant, seulement 22 %
                        des propriétaires suivent les conseils de leur
                        vétérinaire...
                      </p>
                      <a
                        href="https://www.lacompagniedesanimaux.com/conseil-veterinaire/les-prefrences-alimentaires-des-proprietaires-de-chiens-en-france.html"
                        className="btn btn-primary"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="card-footer">
                      <small>La Compagnie des Animaux</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="card">
                    <img
                      src="https://images.designtrends.com/wp-content/uploads/2016/03/28102309/FEATURE106.jpg"
                      className="card-img-top"
                      alt="Blog 3"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        500 idées de noms de chats commençant par S
                      </h5>
                      <p className="card-text">
                        Si vous prévoyez d’adopter un chat en 2021 et que vous
                        êtes à la recherche d’un nom original, découvrez notre
                        sélection de noms commençant par S: Prénoms pour chats
                        mâles...
                      </p>
                      <a
                        href="https://www.goodbro.fr/conseils-veterinaires/idees-noms-chats-s-2021/"
                        className="btn btn-primary"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="card-footer">
                      <small>
                        Animalerie en ligne pour chats et chiens d'alimentation,
                        de parapharmacie et d'accessoires et conseils
                        vétérinaires
                      </small>
                      <div className="d-flex align-items-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Blog End */}
          {/* Footer Start */}
          <div className="container-fluid bg-dark text-light mt-5 py-5">
            <div className="container py-5">
              <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                  <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                    Get In Touch
                  </h4>
                  <p className="mb-4">
                    You can contact us via email or call us on the +216 98765432
                  </p>

                  <p className="mb-2">
                    <img
                      src="https://cdn.countryflags.com/thumbs/tunisia/flag-round-250.png"
                      alt="Location Icon"
                      className="icon"
                    />
                    Tunis, Tunisia
                  </p>
                  <p className="mb-2">
                    <img
                      src="https://w7.pngwing.com/pngs/799/918/png-transparent-mail-google-gmail-google-s-logo-icon.png"
                      alt="Email Icon"
                      className="icon"
                    />
                    vetopro@gmail.com
                  </p>
                  <p className="mb-0">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/free-phone-1559-461603.png"
                      alt="Phone Icon"
                      className="icon"
                    />
                    +216 98765432
                  </p>
                </div>
                <div className="col-lg-3 col-md-6">
                  <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                    Quick Links
                  </h4>
                  <div className="d-flex flex-column justify-content-start">
                    <a className="text-light mb-2" href="#">
                      <i className="fa fa-angle-right me-2" />
                      Home
                    </a>

                    <a className="text-light mb-2" href="#services">
                      <i className="fa fa-angle-right me-2" />
                      Our Services
                    </a>
                    <a className="text-light mb-2" href="#team">
                      <i className="fa fa-angle-right me-2" />
                      Meet The Team
                    </a>
                    <a className="text-light mb-2" href="#blog">
                      <i className="fa fa-angle-right me-2" />
                      Latest Blog
                    </a>
                    <a className="text-light" href="#">
                      <i className="fa fa-angle-right me-2" />
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                    Popular Links
                  </h4>
                  <div className="d-flex flex-column justify-content-start">
                    <a className="text-light mb-2" href="#">
                      <i className="fa fa-angle-right me-2" />
                      Home
                    </a>

                    <a className="text-light mb-2" href="#services">
                      <i className="fa fa-angle-right me-2" />
                      Our Services
                    </a>
                    <a className="text-light mb-2" href="#team">
                      <i className="fa fa-angle-right me-2" />
                      Meet The Team
                    </a>
                    <a className="text-light mb-2" href="#blog">
                      <i className="fa fa-angle-right me-2" />
                      Latest Blog
                    </a>
                    <a className="text-light" href="#">
                      <i className="fa fa-angle-right me-2" />
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                    Newsletter
                  </h4>
                  <form action="">
                    <div className="input-group"></div>
                  </form>
                  <h6 className="text-primary text-uppercase mt-4 mb-3">
                    Follow Us
                  </h6>
                  <div className="d-flex">
                    <a
                      className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square rounded-circle"
                      href="#"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                  <h6 className="text-primary text-uppercase mt-4 mb-3">
                    No social media at the moment (soon !)
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
            <div className="container">
              <div className="row g-5">
                <div className="col-md-6 text-center text-md-start">
                  <p className="mb-md-0">
                    <a className="text-primary" href="#">
                      Vetopro
                    </a>
                    . All Rights Reserved.
                  </p>
                </div>
                <div className="col-md-6 text-center text-md-end d-flex">
                  <p className="mb-0 ms-auto">Designed by : </p>
                  <p className="mb-0 text-primary"> Skander Khlif</p>
                </div>
              </div>
            </div>
          </div>
          {/* Footer End */}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default PrivateRoute2;
