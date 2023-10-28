import React from "react";
import "./css/inicio.css";
import { useNavigate } from "react-router-dom";

function Inicio() {
  const navigate = useNavigate();

  return (
    <main className="contenedorInicio">
      <h1 className="titulo">Altair Photos</h1>
      <h3>Tu fuente de fotografía creativa</h3>
      <button onClick={() => navigate("/home")}>
        <span>Ir al Portafolio</span>
      </button>
    </main>
  );
}

export default Inicio;
