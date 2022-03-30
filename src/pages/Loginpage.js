import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/LoginPage.css";
import AuthService from "../services/AuthService";
import { logInAction } from "../store/actionsCreators/userActions";
import { Link } from "react-router-dom";

function Loginpage(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch(user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await AuthService.login(login, password);
      localStorage.setItem("token", response.data.accessToken);
      dispatch(logInAction(response.data.user));
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  };

  return (
    <div className="container loginpage">
      <h1>LogIn</h1>
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
            placeholder="password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <input type="submit" className="submit__btn" value={"Log In"} />
        <Link to="/signup" className="submit__btn" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Sign Up</Link>
      </form>
    </div>
  );
}

export default Loginpage;
