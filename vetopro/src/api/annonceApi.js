import axios from "axios";

export const fetchAllAnnonce = async () => {
  const { data } = await axios.get("http://localhost:4000/annonce/allAnnonces");
  return data;
};

export const postAnnonce = async (values) => {
  const addAnnonce = await axios.post(
    "http://localhost:4000/annonce/addannonce",
    {
      ...values,
    }
  );
};
export const updateAnnonce = async (id, values) => {
  const updateAnnonce = await axios.put(
    `http://localhost:4000/annonce/updateannonce/${id}`,
    values
  );
};
export const deleteAnnonce = async (id) => {
  const deleteAnnonce = await axios.delete(
    `http://localhost:4000/annonce/deleteannonce/${id}`
  );
};
export const getUnique = async (id) => {
  const { data } = await axios.get(
    `http://localhost:4000/annonce/getUnique/${id}`
  );
  return data;
};
