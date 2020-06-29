import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import CadastroUser from "./pages/User/CadastroUser";
import Login from "./pages/Login/login";
import CadastroQuestion from "./pages/Question/cadastro-question/Cadastro-question";
import ResponderQuestionario from "./pages/Question/responder/ResponderQuestionario";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro-usuario" component={CadastroUser} />
      <Route path="/login" component={Login} />
      <Route path="/cadastro-question" component={CadastroQuestion} />
      <Route path="/responder-questionario" component={ResponderQuestionario} />
    </Switch>
  );
}

export default Routes;
