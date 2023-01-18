export const AUTHENTICATED = "AUTHENTICATED";
export const LOGOUT = "LOGOUT";
export const AUTH_BEGIN = "AUTH_BEGIN";
export const AUTH_ERROR = "AUTH_ERROR";

export const auth_begin = () => {
  return {
    type: AUTH_BEGIN,
  };
};

export const auth_success = (token) => {
  return {
    type: AUTHENTICATED,
    token,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const auth_error = (err) => {
  return {
    type: AUTH_ERROR,
    err,
  };
};
