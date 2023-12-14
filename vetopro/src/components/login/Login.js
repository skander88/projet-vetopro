import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();

  // login formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // creating token
  const handelLogin = async (value) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/authvet/loginVet",
        value
      );
      console.log("res:", res.data.token);
      await localStorage.setItem("token", res.data.token);
      //await alert("test u did it ");
      navigate("/app/privateRoute");
    } catch (err) {
      console.log(err);
    }
  };
  const handleReset = () => {
    // Reset the form fields
    setEmail("");
    setPassword("");
  };

  return (
    <div className="body8">
      <div className="body89">
        <div className="signup-container">
          <div className="left-container2">
            <h1>
              <i className="fas fa-paw" />
              Let's login !
            </h1>

            <div className="puppy">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGz-VYChmB0xBG5FHdLmZQe-CFiydR1ksIVousl32RYTnSIF1GAlSi-FbSqKm_6vEbI-g&usqp=CAU"
                alt="registerPhoto"
              />
            </div>
          </div>
          <div className="right-container2">
            <header>
              <h1>Welcome back Doc !</h1>
              <br />

              <div className="set2">
                <input
                  type="text"
                  required=""
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <input
                  type="password"
                  className="pass-key"
                  required=""
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </header>
            <footer>
              <div className="set">
                <button type="reset" onClick={handleReset}>
                  Reset
                </button>
                <a href="/registerVet">Register</a>
                <button
                  id="next"
                  onClick={() =>
                    handelLogin({
                      email,
                      password,
                    })
                  }
                >
                  Login
                </button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
