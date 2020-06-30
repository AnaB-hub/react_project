import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { useDispatch } from "react-redux";

import "./login.css";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import api from "./../../services/api";
import { addUser } from "./../../store/modules/user/actions";
import Alerta from "./../../components/Alert/Alert";

function Login({ history }) {
  const [cpf, setCPF] = useState("");
  const [senha, setSenha] = useState("");
  const [show, setShow] = useState(false);
  const [mensage, setMessage] = useState("");
  const [variant, setVariant] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    //Limpar o nome do User qdo entrar em login
    localStorage.clear();
  }, []);

  async function handleLogIn(e) {
    e.preventDefault();
    const response = await api.get(`/user?cpf=${cpf}&senha=${senha}`);
    if (response && response.data.length) {
      dispatch(addUser(response.data[0].nome));
      history.push("/");
    } else {
      setShow(true);
      setVariant("danger");
      setMessage("CPF ou Senha inválidos! Tente novamente!");
    }
  }

  function limpar() {
    setSenha("");
    setCPF("");
  }

  return (
    <div>
      <Alerta variant={variant} show={show} mensage={mensage} />
      <MDBContainer className="body">
        <MDBRow>
          <MDBCol md="6">
            <Form onSubmit={handleLogIn}>
              <div className="title">
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
