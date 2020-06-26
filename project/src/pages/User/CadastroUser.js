import React, { useState, useEffect } from "react";

import { Form, Button, ButtonGroup, Alert } from "react-bootstrap";
import "./user.css";
import api from "./../../services/api";

function CadastroUser() {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [mensage, setMessage] = useState("");

  // const history = useHistory();

  useEffect(() => {}, []);

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      nome,
      cpf,
      senha,
      email,
    };
    setSucess(false);
    const response = await api.post("/user", data);
    if (response.status === 200 || response.status === 201) {
      setMessage("Cadastrado com sucesso!");
      setShow(true);
      setSucess(true);
      return;
    }
    setMessage("Erro ao cadastrar!");
  }

  return (
    <div className="body">
      <div className="titulo">
        <h1>Cadastro de Usuário</h1>
      </div>
      {show && (
        <Alert
          variant={sucess ? "success" : "danger"}
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>{mensage}</Alert.Heading>
        </Alert>
      )}
      <Form onSubmit={handleRegister}>
        <div className="row">
          <div className="col-lg-3">
            <Form.Group className="input">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-lg-3">
            <Form.Group className="input">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                type="text"
                placeholder="CPF"
                value={cpf}
                onChange={(e) => setCPF(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-lg-3">
            <Form.Group className="input">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-lg-3">
            <Form.Group className="input">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </div>
        </div>
        <div className="row alinhar">
          <ButtonGroup className="buttonGroup">
            <Button variant="dark" className="button" type="submit">
              Salvar
            </Button>
            <Button
              variant="secondary"
              className="button"
              onClick={() => setShow(true)}
            >
              Limpar
            </Button>
            <Button variant="secondary" className="button">
              Voltar
            </Button>
          </ButtonGroup>
        </div>
      </Form>
    </div>
  );
}

export default CadastroUser;
