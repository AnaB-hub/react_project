import React, { useState, useEffect } from "react";

import { Form, ButtonGroup, Button } from "react-bootstrap";

import api from "./../../../services/api";
import Alerta from "./../../../components/Alert/Alert";
import Loader from "./../../../components/Loader/Loader";

function CadastroQuestion() {
  const [pergunta, setPergunta] = useState("");
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState("");
  const [mensage, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getCategorias() {
      setLoader(true);
      let categorias = await api.get("/categorias");
      setCategorias(categorias.data);
      setLoader(false);
    }
    getCategorias();
  }, []);

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      pergunta,
      titulo,
      categoria,
    };
    const response = await api.post("/question", data);
    if (response.status === 200 || response.status === 201) {
      setMessage("Cadastrada com sucesso!");
      setShow(true);
      setVariant("success");
      limpar();
      return;
    }
  }

  function limpar() {
    setCategoria("");
    setPergunta("");
  }

  return (
    <div className="body">
      <Alerta variant={variant} show={show} mensage={mensage} />
      <div className="title">
        <h1>Cadastro de Perguntas</h1>
      </div>
      <Loader loader={loader} />
      <Form onSubmit={handleRegister}>
        <div className="row">
          <div className="col-lg-5">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Categoria *</Form.Label>
              <Form.Control
                as="select"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                required
              >
                <option value="null">Selecione</option>
                {categorias.map((categoria) => (
                  <option value={categoria.id}>{categoria.nome}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>
          <div className="col-lg-5">
            <Form.Group>
              <Form.Label>Título *</Form.Label>
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
              <Form.Label>Pergunta *</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                placeholder="Informe a pergunta que deseja salvar"
                value={pergunta}
                onChange={(e) => setPergunta(e.target.value)}
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
