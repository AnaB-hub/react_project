import { all, takeLatest } from "redux-saga/effects";

function* addUserToLocalStorage({ user }) {
  // Criado apenas para ter um exemplo de como deve-se fazer
  // O saga é para requisições
  yield localStorage.setItem("user", user);
}

export default all([
  takeLatest("ADD_USER_TO_LOCAL_STORAGE", addUserToLocalStorage),
]);
