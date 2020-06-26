import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import CadastroUser from "./pages/User/CadastroUser";
import Login from "./pages/Login/login";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro-usuario" component={CadastroUser} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default Routes;
