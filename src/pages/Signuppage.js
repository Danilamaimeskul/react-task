import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/LoginPage.css";
import AuthService from "../services/AuthService";
import { logInAction } from "../store/actionsCreators/userActions";
import { Link } from "react-router-dom";

function Signuppage(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [validateErrors, setValidateErrors] = useState([])

  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch(user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await AuthService.signup(
        login,
        password,
        repeatPassword,
        firstName,
        lastName,
        age
      );
      localStorage.setItem("token", response.data.accessToken);
      dispatch(logInAction(response.data.user));
      setValidateErrors([])
    } catch (e) {
      setValidateErrors(e.response?.data?.errors.map(item => {
        return {
          message: item.msg,
          input: item.param
        }
      }))
      console.log(validateErrors)
    }
  };

  return (
    <div className="container loginpage" style={{marginTop: '100px'}}>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit} className="login__form">
        <label className="inputs">
          <input
            className="text__input"
            placeholder="username"
            type="text"
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <input
            className="text__input"
            placeholder="first name"
            type="text"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            className="text__input"
            placeholder="last name"
            type="text"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <input
            className="text__input"
            placeholder="age"
            type="text"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <input
            className="text__input"
            placeholder="password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            className="text__input"
            placeholder="repeat password"
            type="password"
            onChange={(e) => {
              setRepeatPassword(e.target.value);
            }}
          />
        </label>
        <input type="submit" className="submit__btn" value={"Sign Up"} />
        <Link to="/login" className="submit__btn" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Log In</Link>
      </form>
    </div>
  );
}

export default Signuppage;
