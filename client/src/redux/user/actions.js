export const USER_SUCCESS = "USER_SUCCESS";
export const USER_BEGIN = "USER_BEGIN";
export const USER_ERROR = "USER_ERROR";

export const user_begin = () => {
  return {
    type: USER_BEGIN,
  };
};

export const user_success = (user) => {
  return {
    type: USER_SUCCESS,
    user,
  };
};

export const user_error = (err) => {
  return {
    type: USER_ERROR,
    err,
  };
};
