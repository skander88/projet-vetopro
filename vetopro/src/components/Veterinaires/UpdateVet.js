// UpdateVet.js

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateVet } from "../../api/vetApi";
import { setVet } from "../../store/vetSlice";
import { fetchAllVet } from "../../api/vetApi";
import { fetchVet } from "../../api/vetApi";

function UpdateVet() {
  // Get the Vet from Redux state
  const authVet = useSelector((state) => state.vet);

  // Fetch the authenticated Vet
  const getVet = async () => {
    try {
      const data = await fetchVet();
      dispatch(setVet(data));
    } catch (error) {
      console.error("Error fetching Vet:", error);
    }
  };

  useEffect(() => {
    getVet();
  }, []);

  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const vet = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [numordre, setNumordre] = useState("");
  const [tel, setTel] = useState("");
  const [age, setAge] = useState("");
  const [cabAdresse, setCabAdresse] = useState("");
  const [description, setDescription] = useState("");
  const [services, setServices] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    // Populate form fields with vet data on component mount
    setName(authVet.name);
    setLastName(authVet.lastName);
    setEmail(authVet.email);
    setCabAdresse(authVet.cabAdresse);
    setTel(authVet.tel);
    setNumordre(authVet.numordre);
    setDescription(authVet.description);
    setServices(authVet.services);
    setAge(authVet.age);
    setPassword(authVet.password);
    setNewPassword("");
    setConfirmPassword("");
  }, [authVet]);

  const handleShow = () => {
    setShow(!show);
  };

  const handleUpdate = async () => {
    if (newPassword !== confirmPassword) {
      alert("Les nouveaux mots de passe ne correspondent pas.");
      return;
    }

    const updatedData = {
      name,
      lastName,
      email,
      cabAdresse,
      numordre,
      tel,
      age,
      description,
      services,
      password,
      newPassword,
      confirmPassword,
    };

    try {
      // Assuming your updateVet function returns the updated vet data
      const updatedVet = await updateVet(vet._id, updatedData);

      // Dispatch the updated vet data to Redux store
      dispatch(setVet(updatedVet));

      setShow(false);
      alert("Modifier avec succès !");
    } catch (error) {
      console.error("Error updating vet:", error);
      alert("Erreur lors de la mise à jour du profil du vétérinaire.");
    }
  };

  return (
    <div className="bodyup">
      <div className="container-xl px-4 mt-4">
        {/* Account page navigation*/}
        <nav className="nav nav-borders">
          <a
            className="nav-link active ms-0"
            href="/app/privateRoute"
            target="__blank"
          >
            Go back
          </a>
          <a
            className="nav-link"
            href="#"
            target="__blank"
            onClick={() => logout()}
          >
            logout
          </a>
        </nav>
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-xl-4">
            {/* Profile picture card*/}
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                {/* Profile picture image*/}
                <img
                  className="img-account-profile rounded-circle mb-2"
                  src={authVet.photo}
                  alt=""
                />
                {/* Profile picture help block*/}
                <div className="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                {/* Profile picture upload button*/}
                <button className="btn btn-primary" type="button">
                  Upload new image
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            {/* Account details card*/}
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form>
                  {/* Form Group (username)*/}
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputUsername">
                      Username (how your name will appear to other users on the
                      site)
                    </label>
                    <input
                      className="form-control"
                      id="inputUsername"
                      type="text"
                      value={`Dr ${name} ${lastName}`}
                      disabled
                    />
                  </div>
                  {/* Form Row*/}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (first name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputFirstName">
                        Name
                      </label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    {/* Form Group (last name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">
                        Last Name
                      </label>
                      <input
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* Form Row        */}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (organization name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputOrgName">
                        Age
                      </label>
                      <input
                        className="form-control"
                        id="inputOrgName"
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>
                    {/* Form Group (location)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLocation">
                        Order Number
                      </label>
                      <input
                        className="form-control"
                        id="inputLocation"
                        type="text"
                        value={numordre}
                        onChange={(e) => setNumordre(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    {/* Form Group (organization name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputOrgName">
                        Cabinet Adresse
                      </label>
                      <input
                        className="form-control"
                        id="inputOrgName"
                        type="text"
                        value={cabAdresse}
                        onChange={(e) => setCabAdresse(e.target.value)}
                      />
                    </div>
                    {/* Form Group (location)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPhone">
                        Phone number
                      </label>
                      <input
                        className="form-control"
                        id="inputPhone"
                        type="tel"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* Form Row*/}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (first name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputFirstName">
                        Description
                      </label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    {/* Form Group (last name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">
                        Services
                      </label>
                      <input
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        value={services}
                        onChange={(e) => setServices(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* Form Group (email address)*/}
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputEmailAddress">
                        Email address
                      </label>
                      <input
                        className="form-control"
                        id="inputEmailAddress"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputEmailAddress">
                        Password
                      </label>
                      <input
                        className="form-control"
                        id="inputEmailAddress"
                        type="password"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Save changes button*/}
                  <button className="btn btn-primary" type="button">
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateVet;
