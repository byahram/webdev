import { createBrowserRouter } from "react-router-dom";
import About from "../screens/About";
import Home03 from "../screens/Home03";
import NotFound from "../screens/NotFound";
import Error from "../components/Error";
import App07 from "../App07";
import Followers02 from "../screens/users/Followers02";
import User03 from "../screens/users/User03";

const router07 = createBrowserRouter([
  {
    path: "/",
    element: <App07 />,
    children: [
      { path: "", element: <Home03 />, errorElement: <Error /> },
      { path: "about", element: <About /> },
      {
        path: "users/:userId",
        element: <User03 />,
        children: [{ path: "followers", element: <Followers02 /> }],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router07;
