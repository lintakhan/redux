import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

API.interceptors.request.use(
  (req) => {
  if (Cookies.get("auth-token")) {
    req.headers.authorization = `Bearer ${Cookies.get("auth-token")}`;
  }

  return req;
});

export const testapi = () => API.get("/");

export const signup = (form) => API.post("/user/signup", form);
export const login = (form) => API.post("/user/login", form);
export const getUser = () => API.get("/user/get-user");
