import { createBrowserRouter } from "react-router-dom";
import About from "../screens/About";
import NotFound from "../screens/NotFound";
import Error from "../components/Error";
import Followers02 from "../screens/users/Followers02";
import User03 from "../screens/users/User03";
import App08 from "../App08";
import Home04 from "../screens/Home04";

const router08 = createBrowserRouter([
  {
    path: "/",
    element: <App08 />,
    children: [
      { path: "", element: <Home04 />, errorElement: <Error /> },
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

export default router08;
