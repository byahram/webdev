import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./route/PrivateRoute";
import { useEffect, useState } from "react";
import api from "./utils/api";

function App() {
  // user값이 있으면 ? TodoPage : redirect to /login
  const [user, setUser] = useState(null);

  // 토큰을 통해 유저정보를 가져오기
  const getUser = async () => {
    try {
      const storedToken = sessionStorage.getItem("token");
      if (storedToken) {
        const response = await api.get("/users/me");
        setUser(response.data.user);
      }
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute user={user}>
            <TodoPage user={user} setUser={setUser} />
          </PrivateRoute>
        }
      />
      <Route
        path="/register"
        element={<RegisterPage user={user} setUser={setUser} />}
      />
      <Route
        path="/login"
        element={<LoginPage user={user} setUser={setUser} />}
      />
    </Routes>
  );
}

export default App;
