import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Login from "../login/Login";
import NavbarVet from "../navbar/NavbarVet";
import { fetchAllVet } from "../../api/vetApi";
import { setVet } from "../../store/vetSlice";

const PrivateRoute2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the Vet from Redux state
  const authVet = useSelector((state) => state.vet);

  // Fetch the authenticated Vet
  const getVet = async () => {
    try {
      const data = await fetchAllVet();
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
    navigate("/loginVet");
  };

  return (
    <div>
      {token ? (
        <div>
          <NavbarVet vet={authVet} logout={logout} />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default PrivateRoute2;
