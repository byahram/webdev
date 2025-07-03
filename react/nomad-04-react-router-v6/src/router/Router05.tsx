import { createBrowserRouter } from "react-router-dom";
import About from "../screens/About";
import Home03 from "../screens/Home03";
import NotFound from "../screens/NotFound";
import Error from "../components/Error";
import App05 from "../App05";
import User from "../screens/users/User";

const router05 = createBrowserRouter([
  {
    path: "/",
    element: <App05 />,
    children: [
      { path: "", element: <Home03 />, errorElement: <Error /> },
      { path: "about", element: <About /> },
      { path: "users/:userId", element: <User /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router05;
