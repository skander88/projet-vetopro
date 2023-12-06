import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { postVet } from "../../api/vetApi";

const RegisterVet = () => {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [cabAdresse, setCabAdresse] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [numordre, setNumordre] = useState("");
  const [description, setDescription] = useState("");
  const [services, setServices] = useState("");

  // navigation register ====> login
  const navigate = useNavigate();
  const logi = async (value) => {
    await postVet(value);
    navigate("/login");
  };

  const handleReset = () => {
    // Reset the form fields
    setName("");
    setEmail("");
    setLastName("");
    setPassword("");
    setPhoto(null);
    setAge("");
    setNumordre("");
    setDescription("");
    setServices("");
  };

  const handlePhotoChange = (e) => {
    // Handle file input changes
    const file = e.target.files[0];
    setPhoto(file);
  };

  return (
    <div className="body89">
      <div className="signup-container">
        <div className="left-container">
          <h1>
            <i className="fas fa-paw" />
            Let's create your account !
          </h1>
          <div className="puppy">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGz-VYChmB0xBG5FHdLmZQe-CFiydR1ksIVousl32RYTnSIF1GAlSi-FbSqKm_6vEbI-g&usqp=CAU"
              alt="registerPhoto"
            />
          </div>
        </div>
        <div className="right-container">
          <header>
            <h1>Welcome between us Doc !</h1>
            <div className="set">
              <div className="pets-name">
                <label htmlFor="pets-name">Name</label>
                <input
                  type="text"
                  id="pets-name"
                  placeholder="Please enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="pets-photo">
                <label htmlFor="pets-upload">Upload photo</label>
                <br />
                <input
                  type="file"
                  id="pets-upload"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="photcont"
                />
              </div>
            </div>
            <div className="set">
              <div className="pets-breed">
                <label htmlFor="pets-breed">Last Name</label>
                <input
                  type="text"
                  id="pets-breed"
                  placeholder="Please enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="pets-birthday">
                <label htmlFor="pets-breed">E-mail</label>
                <input
                  type="text"
                  id="pets-breed"
                  placeholder="Please enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="set">
              <div className="pets-gender">
                <label htmlFor="pets-breed">Age</label>
                <input
                  type="text"
                  id="pets-breed"
                  placeholder="Please enter your Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="pets-spayed-neutered">
                <label htmlFor="pets-breed">Password</label>
                <input
                  type="text"
                  id="pets-breed"
                  placeholder="Please enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="pets-weight">
              <label htmlFor="pets-breed">Cabinet Adresse</label>
              <input
                type="text"
                id="pets-breed"
                placeholder="Please enter your Adresse"
                value={cabAdresse}
                onChange={(e) => setCabAdresse(e.target.value)}
              />
            </div>
          </header>
          <footer>
            <div className="set">
              <button type="reset" onClick={handleReset}>
                Reset
              </button>
              <button id="next">Next</button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default RegisterVet;
