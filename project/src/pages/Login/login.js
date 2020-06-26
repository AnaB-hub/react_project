import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import "./login.css";
import { Form, Alert, Button, ButtonGroup } from "react-bootstrap";
import api from "./../../services/api";

function Login() {
  const [cpf, setCPF] = useState("");
  const [senha, setSenha] = useState("");
  const [show, setShow] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [mensage, setMessage] = useState("");

  useEffect(() => {
    //Limpar o nome do User qdo entrar em login
    localStorage.clear();
  }, []);

  async function handleLogIn(e) {
    e.preventDefault();
    const data = {
      cpf,
      senha,
    };
    const response = await api.get(`/user?cpf=${cpf}&senha=${senha}`);
    if (response && response.data.length) {
      localStorage.setItem("user", response.data[0].nome);
    } else {
      setShow(true);
      setSucess(false);
      setMessage("CPF ou Senha inválidos! Tente novamente!");
    }
  }

  function limpar() {
    setSenha("");
    setCPF("");
  }

  return (
    <div>
      {show && (
        <Alert
          variant={sucess ? "success" : "danger"}
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>{mensage}</Alert.Heading>
        </Alert>
      )}
      <MDBContainer className="body">
        <MDBRow>
          <MDBCol md="6">
            <Form onSubmit={handleLogIn}>
              <div className="titulo">
                <h1>Login</h1>
              </div>
              <div className="grey-text">
                <Form.Group className="input">
                  <Form.Label>CPF *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={(e) => setCPF(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="input">
                  <Form.Label>Senha *</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
              <div className="text-center py-4 mt-3">
                <ButtonGroup>
                  <Button variant="dark" className="button" type="submit">
                    Entrar
                  </Button>
                  <Button
                    variant="secondary"
                    className="button"
                    type="button"
                    onClick={limpar}
                  >
                    Limpar
                  </Button>
                </ButtonGroup>
              </div>
            </Form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Login;
