import { createSlice } from "@reduxjs/toolkit";
const vetSlice = createSlice({
  name: "vet",
  initialState: {
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGz-VYChmB0xBG5FHdLmZQe-CFiydR1ksIVousl32RYTnSIF1GAlSi-FbSqKm_6vEbI-g&usqp=CAU",

    name: "vet",
    lastName: "veterinarian",
    age: "30",
    numordre: "21548",
    tel: "12345678",
    cabAdresse: "vet's adress here",
    description: "vet's description",
    services: "vet's services",
    email: "vet@gmail.com",
    password: "vetPassword",
    role: "user",
  },
  reducers: {
    setVet: (state, action) => {
      return action.payload;
    },
  },
});

export const { setVet } = vetSlice.actions;
export default vetSlice.reducer;
