import { createBrowserRouter } from "react-router-dom";
import About from "../screens/About";
import Home03 from "../screens/Home03";
import NotFound from "../screens/NotFound";
import Error from "../components/Error";
import App06 from "../App06";
import Followers from "../screens/users/Followers";
import User02 from "../screens/users/User02";

const router06 = createBrowserRouter([
  {
    path: "/",
    element: <App06 />,
    children: [
      { path: "", element: <Home03 />, errorElement: <Error /> },
      { path: "about", element: <About /> },
      {
        path: "users/:userId",
        element: <User02 />,
        children: [{ path: "followers", element: <Followers /> }],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router06;
