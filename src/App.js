import { Route, Routes, Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./styles/App.css";

import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";

function App() {
  const user = useSelector(({ user }) => user);

  return (
    <Routes>
      <Route
        path="/"
        element={user.isLogin ? <Homepage /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={!user.isLogin ? <Loginpage /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
