import types from "../store/types";
import {
  logInAction,
  logOutAction,
} from "../store/actionsCreators/userActions";

describe("User action", () => {
  it("logInAction log in", () => {
    const login = logInAction();
    expect(login).toEqual({ type: types.LOG_IN });
  });
  it("logOutAction log out", () => {
    const logout = logOutAction();
    expect(logout).toEqual({ type: types.LOG_OUT });
  });
});
