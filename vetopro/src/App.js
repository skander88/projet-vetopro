import RegisterClient from "./components/register/RegisterClient";
import RegisterVet from "./components/register/RegisterVet";
import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import AnnonceList from "./components/annonces/AnnonceList";
import AnnonceAdd from "./components/annonces/AnnonceCard";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />

        {/*<Route path="/app/privateRoute" element={<PrivateRoute />} />*/}
      </Routes>

      {/* routes de partie client  */}
      <Routes>
        <Route path="/registerClient" element={<RegisterClient />} />

        {/*<Route path="/memoAdd" element={<MemoAdd />} />*/}
      </Routes>
      {/* routes de partie vet  */}
      <Routes>
        <Route path="/registerVet" element={<RegisterVet />} />

        {/*<Route path="/memoAdd" element={<MemoAdd />} />*/}
      </Routes>
    </div>
  );
}

export default App;
