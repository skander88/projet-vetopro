import axios from "axios";

export const postVet = async (value) => {
  const addVet = await axios.post("http://localhost:4000/authvet/registerVet", {
    ...value,
  });
};

export const fetchVet = async () => {
  const token = localStorage.getItem("token");
  const { data } = await axios.get(
    "http://localhost:4000/authvet/myAccountVet",
    {
      headers: { Authorization: token },
    }
  );
  return data;
};
export const updateVet = async (id, values) => {
  const updateVet = await axios.put(
    `http://localhost:4000/vet/updatevet/${id}`,
    values
  );
};
export const fetchAllVet = async () => {
  const { data } = await axios.get(
    "http://localhost:4000/authvet/Veterinaires"
  );
  return data;
};
