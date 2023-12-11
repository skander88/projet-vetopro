import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
const Logincl = () => {
  const navigate = useNavigate();

  // login formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // creating token
  const handelLogin = async (value) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/authclient/login",
        value
      );
      console.log("res:", res.data.token);
      await localStorage.setItem("token", res.data.token);
      //await alert("test u did it ");
      navigate("/app/privateRoute2");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const themes = [
      {
        background: "#1A1A2E",
        color: "#FFFFFF",
        primaryColor: "#0F3460",
      },
      {
        background: "#461220",
        color: "#FFFFFF",
        primaryColor: "#E94560",
      },
      {
        background: "#192A51",
        color: "#FFFFFF",
        primaryColor: "#967AA1",
      },
      {
        background: "#F7B267",
        color: "#000000",
        primaryColor: "#F4845F",
      },
      {
        background: "#F25F5C",
        color: "#000000",
        primaryColor: "#642B36",
      },
      {
        background: "#231F20",
        color: "#FFF",
        primaryColor: "#BB4430",
      },
    ];

    const setTheme = (theme) => {
      document.documentElement.style.setProperty(
        "--background",
        theme.background
      );
      document.documentElement.style.setProperty("--color", theme.color);
      document.documentElement.style.setProperty(
        "--primary-color",
        theme.primaryColor
      );
    };

    const displayThemeButtons = () => {
      const btnContainer = document.querySelector(".theme-btn-container");
      themes.forEach((theme) => {
        const div = document.createElement("div");
        div.className = "theme-btn";
        div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
        btnContainer.appendChild(div);
        div.addEventListener("click", () => setTheme(theme));
      });
    };

    displayThemeButtons();
  }, []); // Run only once after initial render

  return (
    <div className="body8">
      <section className="container">
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            <img
              src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
              alt="illustration"
              className="illustration"
            />
            <h1 className="opacity">Welcome back !</h1>
            <form>
              <input
                type="text"
                required=""
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="pass-key"
                required=""
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
            <div className="register-forget opacity">
              <a href="/register">Register</a>
              <button
                type="button"
                class="button-8"
                onClick={() => handelLogin({ email, password })}
              >
                Login
              </button>
            </div>
          </div>
          <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
      </section>
    </div>
  );
};

export default Logincl;
