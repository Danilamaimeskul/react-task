import userReducer from "../store/reducers/userReducer";
import { LOG_IN, LOG_OUT } from "../store/reducers/userReducer";
import { logInAction, logOutAction } from "../store/actionsCreators/userActions";
import configureStore from '../store/store'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'



test('should handle a state to login', () =>{
    const previousState = {isLogin: false}
    expect(userReducer(previousState, logInAction())).toEqual({
        isLogin: true,
    })
})

test('should handle a state to logout', () =>{
    const previousState = {isLogin: true}
    expect(userReducer(previousState, logOutAction())).toEqual({
        isLogin: false,
    })
})

describe('User reducer', () => {
    let store 
    let user

    const initialState = {};

    beforeEach(() => {
        store = configureStore()
        user = store.getState()["user"]

    })
    it("should ste the supplied initial state", () => {
        expect(user).toEqual({
            "isLogin": false
        })
    })
})

