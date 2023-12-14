import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVet } from "../../store/vetSlice";
import { fetchAllVet } from "../../api/vetApi";
import VetCard from "../Veterinaires/VetCard";

function VetList() {
  const veto = useSelector((state) => state.vet);
  console.log("V", veto);

  const dispatch = useDispatch();
  const getAll = async () => {
    const data = await fetchAllVet();
    console.log("je viens de la bd", data.users);
    dispatch(setVet(data.users));
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      {Array.isArray(veto) ? (
        veto.map((e) => <VetCard key={e.id} mini={e} getAll={getAll} />)
      ) : (
        <VetCard key={veto.id} mini={veto} getAll={getAll} />
      )}
    </div>
  );
}

export default VetList;
