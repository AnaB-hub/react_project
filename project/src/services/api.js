import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "http://localhost:8080",
});

export default api;
