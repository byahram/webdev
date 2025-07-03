import { createBrowserRouter } from "react-router-dom";
import About from "../screens/About";
import Home from "../screens/Home";
import NotFound from "../screens/NotFound";
import Error from "../components/Error";
import App04 from "../App04";

const router04 = createBrowserRouter([
  {
    path: "/",
    element: <App04 />,
    children: [
      { path: "", element: <Home />, errorElement: <Error /> },
      { path: "about", element: <About /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router04;
