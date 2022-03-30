import userReducer from "../store/reducers/userReducer";
import {
  logInAction,
  logOutAction,
} from "../store/actionsCreators/userActions";
import configureStore from "../store/store";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const user = {
    placeholder: 'abobus na kodere'
}

test("should handle a state to login", () => {
  const previousState = { isLogin: false,  user: null };
  expect(userReducer(previousState, logInAction(user))).toEqual({
    isLogin: true,
    user: user
  });
});

test("should handle a state to logout", () => {
  const previousState = { isLogin: true, user: user };
  expect(userReducer(previousState, logOutAction())).toEqual({
    isLogin: false, user: null
  });
});

describe("User reducer", () => {
  let store;
  let user;

  const initialState = {};

  beforeEach(() => {
    store = configureStore();
    user = store.getState()["user"];
  });
  it("should ste the supplied initial state", () => {
    expect(user).toEqual({
      isLogin: false,  user: null
    });
  });
});
