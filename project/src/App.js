import React from "react";
import { Router } from "react-router-dom";

import "./App.css";
import Menu from "./components/Menu/menu";
import Routes from "./routes";
import history from "./services/history";

function App() {
  return (
    <div>
      <Router history={history}>
        <Menu />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
