import types from "../types";

export const logInAction = (user) => ({ type: types.LOG_IN, payload: user });
export const logOutAction = () => ({ type: types.LOG_OUT });
