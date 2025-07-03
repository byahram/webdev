import { createBrowserRouter } from "react-router-dom";
import About from "../screens/About";
import Home02 from "../screens/Home02";
import NotFound from "../screens/NotFound";
import App03 from "../App03";
import Error from "../components/Error";

const router03 = createBrowserRouter([
  {
    path: "/",
    element: <App03 />,
    children: [
      { path: "", element: <Home02 />, errorElement: <Error /> },
      { path: "about", element: <About /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router03;
