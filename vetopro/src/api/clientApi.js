import axios from "axios";

export const postClient = async (value) => {
  const addClient = await axios.post(
    "http://localhost:4000/authclient/registerClient",
    {
      ...value,
    }
  );
};

export const fetchClient = async () => {
  const token = localStorage.getItem("token");
  const { data } = await axios.get(
    "http://localhost:4000/authclient/myAccountClient",
    {
      headers: { Authorization: token },
    }
  );
  return data;
};
export const updateClient = async (id, values) => {
  const updateClient = await axios.put(
    `http://localhost:4000/client/updateclient/${id}`,
    values
  );
};
export const fetchAllClient = async () => {
  const { data } = await axios.get("http://localhost:4000/authclient/clients");
  return data;
};
