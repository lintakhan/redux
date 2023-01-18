import { USER_BEGIN, USER_ERROR, USER_SUCCESS } from "./actions";

const initialState = {
  loading: false,
  user: null,
  err: null,
};

const userReducer = (state = initialState, action) => {
  const { type, user, err } = action;

  switch (type) {
    case USER_BEGIN:
      return { ...state, err: null, loading: true };

    case USER_SUCCESS:
      return { err: null, loading: false, user };

    case USER_ERROR:
      return { err, loading: false, token: null };

    default:
      return state;
  }
};

export default userReducer;
