import { LOG_IN, LOG_OUT } from "../store/reducers/userReducer";
import {
  logInAction,
  logOutAction,
} from "../store/actionsCreators/userActions";

describe("User action", () => {
  it("logInAction log in", () => {
    const login = logInAction();
    expect(login).toEqual({ type: LOG_IN });
  });
  it("logOutAction log out", () => {
    const logout = logOutAction();
    expect(logout).toEqual({ type: LOG_OUT });
  });
});
