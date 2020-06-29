import React, { useState, useEffect } from "react";

import { Form, Button, ButtonGroup } from "react-bootstrap";

import "./user.css";
import api from "./../../services/api";
import Alerta from "./../../components/Alert/Alert";

function CadastroUser() {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [mensage, setMessage] = useState("");
  const [variant, setVariant] = useState("");

  useEffect(() => {}, []);

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      nome,
      cpf,
      senha,
      email,
    };
    let response;
    try {
      response = await api.post("/user", data);
    } catch (e) {
      setMessage("Erro ao cadastrar. Tente novamente mais tarde!");
      setShow(true);
      setVariant("danger");
      console.log("ERROS", e);
      return;
    }
    if ((response && response.status === 200) || response.status === 201) {
      setMessage("Cadastrado com sucesso!");
      setShow(true);
      setVariant("success");
      limpar();
      return;
    }
  }

  function limpar() {
    setNome("");
    setCPF("");
    setSenha("");
    setEmail("");
  }

  return (
    <div className="body">
      <Alerta variant={variant} show={show} mensage={mensage} />
      <div className="title">
        <h1>Cadastro de Usuário</h1>
      </div>
      <Form onSubmit={handleRegister}>
        <div className="row">
          <div className="col-lg-3">
            <Form.Group className="input">
              <Form.Label>Nome *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </Form.Group>
          </div>
          <div className="col-lg-3">
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
          </div>
          <div className="col-lg-3">
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
              type="button"
              onClick={limpar}
            >
              Limpar
            </Button>
          </ButtonGroup>
        </div>
      </Form>
    </div>
  );
}

export default CadastroUser;
