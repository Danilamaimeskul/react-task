import { Route, Routes, Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import "./styles/App.css";

import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import { API_URL } from "./axios";
import { logInAction } from "./store/actionsCreators/userActions";
import { useEffect } from "react";

function App() {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch(user);

  const checkAuth = async () => {
    try {
      const response = await axios.get(`${API_URL}/user/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);
      dispatch(logInAction(response.data.user));
    } catch (e) {
      console.log(e.responce?.data?.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  return (
    <Routes>
      {user.isLogin ? (
        <>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/signup" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signuppage />} />
        </>
      )}
    </Routes>
  );
}

export default App;
