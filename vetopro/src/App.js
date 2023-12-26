import RegisterClient from "./components/register/RegisterClient";
import RegisterVet from "./components/register/RegisterVet";
import Login from "./components/login/Login";
import Logincl from "./components/login/Logincl";
import PasLogin from "./components/passassion/PasLogin";
import PasRegis from "./components/passassion/PasRegis";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
//import AnnonceList from "./components/annonces/AnnonceList";
//import AnnonceAdd from "./components/annonces/AnnonceCard";
import Homepage from "./components/homepage/Homepage";
import PrivateRoute2 from "./components/privateRoute/PrivateRoute2";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>

      {/* routes de partie client  */}
      <Routes>
        <Route path="/registerClient" element={<RegisterClient />} />
        <Route path="/loginClient" element={<Logincl />} />
        <Route path="/pasRegis" element={<PasRegis />} />
        <Route path="/paslogin" element={<PasLogin />} />
        <Route path="/app/privateRoute" element={<PrivateRoute />} />

        {/*<Route path="/Add" element={<Add />} />*/}
      </Routes>
      {/* routes de partie vet  */}
      <Routes>
        <Route path="/registerVet" element={<RegisterVet />} />
        <Route path="/loginVet" element={<Login />} />
        <Route path="/app/privateRoute2" element={<PrivateRoute2 />} />
      </Routes>
    </div>
  );
}

export default App;
