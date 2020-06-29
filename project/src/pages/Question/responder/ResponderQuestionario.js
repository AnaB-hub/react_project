import React, { useEffect, useState } from "react";

import { Card, Button, ButtonGroup } from "react-bootstrap";

import "./responderQuestionario.css";
import api from "./../../../services/api";

function ResponderQuestionario() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getQuestions() {
      let questions = await api.get("/question");
      console.log(questions.data);
      setQuestions(questions.data);
    }
    getQuestions();
  }, []);

  return (
    <div className="body">
      <div className="title">
        <h1>Questionário</h1>
      </div>
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
