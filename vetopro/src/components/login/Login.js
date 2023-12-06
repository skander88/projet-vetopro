import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  //login formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // creating token
  const handelLogin = async (value) => {
    try {
      const res = await axios.post("http://localhost:4000/auth/login", value);

      console.log("res:", res.data.token);
      await localStorage.setItem("token", res.data.token);
      navigate("/app/privateRoute");
    } catch (err) {
      console.log(err);
    }
  };

  return <div></div>;
};

export default Login;
