import React from "react";
import "./css/contacto.css";

function Contacto() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contacto</h2>
        <p className="m-3">Sígueme en Instagram:</p>
        <a
          href="https://www.instagram.com/altair.photos"
          target="_blank"
          rel="noopener noreferrer"
        >
          @altair.photos
        </a>
        <p className="mt-4">Correo Electrónico:</p>
        <a href="mailto:altairphotos@hotmail.com">altairphotos@hotmail.com</a>
        <p className="mt-4">Número de Teléfono:</p>
        <p>+56942566682</p>
      </div>
      <div className="pexels-link">
        <p>Explora mi trabajo en Pexels:</p>
        <a
          href="https://www.pexels.com/es-es/@altair/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pexels-Altair
        </a>
      </div>
    </div>
  );
}

export default Contacto;
