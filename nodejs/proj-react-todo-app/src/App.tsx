import { Route, Routes } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import GlobalStyle from "./GlobalStyle";
import { useCallback, useEffect, useState } from "react";
import api from "./utils/api";
import Layout from "./layout/Layout";
import PrivateRoute from "./route/PrivateRoute";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { User } from "./utils/types";

function App() {
  const [user, setUser] = useState<User | null>(null);

  const getUser = useCallback(async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (token) {
        const response = await api.get("/todo/users/getUser");
        console.log("setCurrentUser : ", response.data.user);
        setUser(response.data.user);
        console.log("user :: ", user);
      }
    } catch (error) {
      console.error("Error occurred while fetching getUser : ", error);
      setUser(null);
    }
  }, [user]);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
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
      </Layout>
    </>
  );
}

export default App;
