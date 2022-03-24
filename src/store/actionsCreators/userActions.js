import { LOG_IN, LOG_OUT } from "../reducers/userReducer";

export const logInAction = () => ({ type: LOG_IN });
export const logOutAction = () => ({ type: LOG_OUT });
