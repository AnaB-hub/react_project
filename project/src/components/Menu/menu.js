import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./menu.css";
import { BsFillBriefcaseFill } from "react-icons/bs";

function Menu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <Link className="menu" to="/">
          Project <BsFillBriefcaseFill />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link className="menu" to="/cadastro-usuario">
              Cadastro de Usuário
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="menu" to="/cadastro-question">
              Cadastro de Perguntas
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="menu" to="/responder-questionario">
              Questionário
            </Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <Link className="menu" to="/login">
              Login
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
