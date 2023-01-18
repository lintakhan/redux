import Cookies from "js-cookie";
import { auth_begin, auth_error, auth_success, logout } from "./actions";
import * as api from "../../api";

export const signup = (form) => {
  return async (dispatch) => {
    try {
      dispatch(auth_begin());

      const { data } = await api.signup(form);

      Cookies.set("auth-token", data.token);
      dispatch(auth_success(data.token));
    } catch (error) {
      Cookies.remove("auth-token");
      dispatch(auth_error(error));
    }
  };
};

export const login = (form) => {
  return async (dispatch) => {
    try {
      dispatch(auth_begin());

      const { data } = await api.login(form);

      Cookies.set("auth-token", data.token);
      dispatch(auth_success(data.token));
    } catch (error) {
      Cookies.remove("auth-token");
      dispatch(auth_error(error));
    }
  };
};

export const logoutAction = () => {
  return async (dispatch) => {
    try {
      dispatch(auth_begin());
      Cookies.remove("auth-token");
      dispatch(logout());
    } catch (error) {
      Cookies.remove("auth-token");
      dispatch(auth_error(error));
    }
  };
};
