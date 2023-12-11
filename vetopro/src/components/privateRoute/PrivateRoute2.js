import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Logincl from "../login/Logincl";
import Navbar from "../navbar/Navbar";
import { fetchAuthClient } from "../../api/clientApi";
import { setClient } from "../../store/clientSlice";

const PrivateRoute2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the client from Redux state
  const authClient = useSelector((state) => state.cli);

  // Fetch the authenticated client
  const getClient = async () => {
    try {
      const data = await fetchAuthClient();
      dispatch(setClient(data));
    } catch (error) {
      console.error("Error fetching client:", error);
    }
  };

  useEffect(() => {
    getClient();
  }, []);

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/loginClient");
  };

  return (
    <div>
      {token ? (
        <div>
          <Navbar cli={authClient} logout={logout} />
        </div>
      ) : (
        <Logincl />
      )}
    </div>
  );
};

export default PrivateRoute2;
