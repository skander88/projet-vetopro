import { configureStore } from "@reduxjs/toolkit";
import cliSlice from "./clientSlice";
import vetSlice from "./vetSlice";
import annonceSlice from "./annonceSlice";

export default configureStore({
  reducer: {
    cli: cliSlice,
    vet: vetSlice,
    annoncel: annonceSlice,
  },
});
