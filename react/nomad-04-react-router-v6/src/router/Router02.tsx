import { createBrowserRouter } from "react-router-dom";
import App02 from "../App02";
import About from "../screens/About";
import Home from "../screens/Home";

const router02 = createBrowserRouter([
  {
    path: "/",
    element: <App02 />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export default router02;
