import Cookies from "js-cookie";
import { AUTH_BEGIN, AUTHENTICATED, LOGOUT, AUTH_ERROR } from "./actions";

const initialState = {
  loading: false,
  token: Cookies.get("auth-token"),
  err: null,
};

const authReducer = (state = initialState, action) => {
  const { type, token, err } = action;

  switch (type) {
    case AUTH_BEGIN:
      return { ...state, err: null, loading: true };

    case AUTHENTICATED:
      return { err: null, loading: false, token };

    case LOGOUT:
      return { err: null, loading: false, token: null };

    case AUTH_ERROR:
      return { err, loading: false, token: null };

    default:
      return state;
  }
};

export default authReducer;
