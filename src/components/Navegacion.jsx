import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./css/navegador.css";

export default function Navegacion() {
  const setActiveClass = ({ isActive }) => (isActive ? "activo" : "inactivo");

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="custom-bg"
      variant="light"
      fixed="top"
      style={{ backgroundColor: "#FFF2D8" }}
    >
      <Container>
        <Navbar.Brand to="/inicio">
          <NavLink to="/" className={setActiveClass}>
            <h2 className="titulo">
              Altair Photos{" "}
              {/* <img src="img/aguila2.png" className="logoAguila" alt="" /> */}
            </h2>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink to="/" className={setActiveClass}>
              <p className="deco me-5">Inicio</p>
            </NavLink>
            <NavLink to="/portafolio" className={setActiveClass}>
              <p className="deco me-5">Portafolio</p>
            </NavLink>
            <NavLink to="/contacto" className={setActiveClass}>
              <p className="deco me-5">Contacto</p>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
