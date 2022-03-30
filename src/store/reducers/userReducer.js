import types from "../types";


const defaultState =  { isLogin: false, user: null };

const userReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOG_IN:
      return { ...state, isLogin: true, user: payload };
    case types.LOG_OUT:
      return { ...state, isLogin: false, user: null };
    default:
      return state;
  }
};

export default userReducer;
