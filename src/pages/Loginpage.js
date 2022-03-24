import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchAuth from "../api/authAPI";
import "../styles/LoginPage.css";

function Loginpage(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch(user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let details = {
      login: login,
      password: password,
    };
    dispatch(fetchAuth(details));
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
        <input type="submit" className="submit__btn" value={"LogIn"} />
      </form>
    </div>
  );
}

export default Loginpage;
