import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
  name: "client",
  initialState: {
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk-DIhTXiFKfP16gOLcWSeLf-Dn6lV-wDrD0sG4C4GY3PT4g9DQTV8V7SF6OBYXz6Jt2I&usqp=CAU",
    name: "client",
    lastName: "has an animal",
    age: "20",
    tel: "12345678",
    Adresse: "client's adress here",
    email: "client@gmail.com",
    password: "clientPassword",
    role: "user",
  },
  reducers: {
    setClient: (state, action) => {
      return action.payload;
    },
  },
});

export const { setClient } = clientSlice.actions;
export default clientSlice.reducer;
