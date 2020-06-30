import React from "react";
import { Router } from "react-router-dom";

import "./App.css";
import Menu from "./components/Menu/menu";
import Routes from "./routes";
import history from "./services/history";
import { Provider } from "react-redux";
import store from "./store/store";
import Rodape from "./components/rodape/rodape";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router history={history}>
          <Menu />
          <Routes />
          <Rodape />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
