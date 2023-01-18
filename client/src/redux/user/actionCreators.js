import Cookies from "js-cookie";
import { user_begin, user_error, user_success } from "./actions";
import * as api from "../../api";

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      dispatch(user_begin());
      const { data } = await api.getUser();
      console.log(data);
      dispatch(user_success(data));
    } catch (error) {
      dispatch(user_error(error));
    }
  };
};
