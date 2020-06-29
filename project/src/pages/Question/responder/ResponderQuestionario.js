import React, { useEffect, useState } from "react";

import { Card, Button, ButtonGroup } from "react-bootstrap";

import "./responderQuestionario.css";
import api from "./../../../services/api";
import Loader from "./../../../components/Loader/Loader";

function ResponderQuestionario() {
  const [questions, setQuestions] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getQuestions() {
      setLoader(true);
      let questions = await api.get("/question");
      console.log(questions.data);
      setQuestions(questions.data);
      setLoader(false);
    }
    getQuestions();
  }, []);

  return (
    <div className="body">
      <div className="title">
        <h1>Questionário</h1>
      </div>
      <Loader loader={loader} />
      {questions.map((question) => (
        <>
          <Card>
            <Card.Body>
              <Card.Title>
                {question.id}- {question.titulo}
              </Card.Title>
              <Card.Text>{question.question}</Card.Text>
              <Card.Text>Categoria: {question.categoria}</Card.Text>
              <ButtonGroup>
                <Button variant="primary" className="button">
                  Sim
                </Button>
                <Button variant="primary" className="button">
                  Não
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </>
      ))}
    </div>
  );
}

export default ResponderQuestionario;
