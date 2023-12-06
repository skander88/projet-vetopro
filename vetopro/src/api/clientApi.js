import axios from "axios";

export const postAuthClient = async (value) => {
  const addClient = await axios.post(
    "http://localhost:4000/authclient/registerClient",
    {
      ...value,
    }
  );
};

export const fetchAuthClient = async () => {
  const token = localStorage.getItem("token");
  const { data } = await axios.get(
    "http://localhost:4000/authclient/myAccountClient",
    {
      headers: { Authorization: token },
    }
  );
  return data;
};
export const fetchAllAuthClient = async () => {
  const { data } = await axios.get("http://localhost:4000/authclient/clients");
  return data;
};
