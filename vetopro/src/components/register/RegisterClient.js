import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { postClient } from "../../api/clientApi";

const RegisterClient = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [tel, setTel] = useState("");
  const [adresse, setAdresse] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // navigation register ====> login
  const navigate = useNavigate();
  const logi = async (value) => {
    await postClient(value);
    navigate("/loginClient");
  };

  const handleReset = () => {
    // Reset the form fields
    setName("");
    setEmail("");
    setLastName("");
    setPassword("");
    setAge("");
    setTel("");
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8w01O5gWe0qa7RjSPtl6EDRwLFz8C-jMuCQkLjaH_awbmKknH7yaKifs5S1ni57H6neI&usqp=CAU"
              alt="registerPhoto"
            />
          </div>
        </div>
        <div className="right-container">
          <header>
            <h1>Welcome between us !</h1>
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
              <div className="pets-birthday">
                <label htmlFor="pets-breed">Adresse</label>
                <input
                  type="text"
                  id="pets-breed"
                  placeholder="Please enter your Adresse"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
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
              <div className="pets-spayed-neutered">
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
            <div className="set">
              <div className="pets-weight">
                <label htmlFor="pets-breed">Tel</label>
                <input
                  type="text"
                  id="pets-breed"
                  placeholder="Please enter your phone number"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                />
              </div>
            </div>
          </header>
          <footer>
            <div className="set">
              <button type="reset" onClick={handleReset}>
                Reset
              </button>
              <button
                id="next"
                onClick={() =>
                  logi({
                    name,
                    lastName,
                    email,
                    password,
                    tel,
                    age,
                    adresse,
                  })
                }
              >
                Register
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default RegisterClient;
