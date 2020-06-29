import { all, takeLatest } from "redux-saga/effects";

function* addUserToLocalStorage({ user }) {
  yield localStorage.setItem("user", user);
}

export default all([
  takeLatest("ADD_USER_TO_LOCAL_STORAGE", addUserToLocalStorage),
]);
