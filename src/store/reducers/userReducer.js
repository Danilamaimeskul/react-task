const defaultState = {
  isLogin: false,
};

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isLogin: true };
    case LOG_OUT:
      return { ...state, isLogin: false };
    default:
      return state;
  }
};

export default userReducer;
