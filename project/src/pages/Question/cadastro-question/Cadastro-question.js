import React, { useState, useEffect } from "react";
import { Alert, Form, ButtonGroup, Button } from "react-bootstrap";

import api from "./../../../services/api";

function CadastroQuestion() {
  const [question, setQuestion] = useState("");
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [show, setShow] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [mensage, setMessage] = useState("");

  useEffect(() => {
    async function getCategorias() {
      let categorias = await api.get("/categorias");
      setCategorias(categorias.data);
    }
    getCategorias();
  }, []);

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      question,
      titulo,
      categoria,
    };
    setSucess(false);
    const response = await api.post("/question", data);
    if (response.status === 200 || response.status === 201) {
      setMessage("Cadastrado com sucesso!");
      setShow(true);
      setSucess(true);
      limpar();
      return;
    }
    //TODO Verificar pq não acusa a msg de erro
    setShow(true);
    setMessage("Erro ao cadastrar!");
  }

  function limpar() {
    setCategoria("");
    setQuestion("");
  }

  return (
    <div className="body">
      {show && (
        <Alert
          variant={sucess ? "success" : "danger"}
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>{mensage}</Alert.Heading>
        </Alert>
      )}
      <div className="titulo">
        <h1>Cadastro de Perguntas</h1>
      </div>
      <Form onSubmit={handleRegister}>
        <div className="row">
          <div className="col-lg-5">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                as="select"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                required
              >
                <option>Selecione</option>
                {categorias.map((categoria) => (
                  <option value={categoria.id}>{categoria.nome}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>
          <div className="col-lg-5">
            <Form.Group>
              <Form.Label>Título</Form.Label>
              <Form.Control
                rows="1"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10">
            <Form.Group>
              <Form.Label>Pergunta</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                placeholder="Informe a pergunta que deseja salvar"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
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

export default CadastroQuestion;
