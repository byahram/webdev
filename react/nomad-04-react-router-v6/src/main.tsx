/* eslint-disable @typescript-eslint/no-unused-vars */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App01 from "./App01.tsx";
import router02 from "./router/Router02.tsx";
import router03 from "./router/Router03.tsx";
import router04 from "./router/Router04.tsx";
import router05 from "./router/Router05.tsx";
import router06 from "./router/Router06.tsx";
import router07 from "./router/Router07.tsx";
import router08 from "./router/Router08.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* 4.1 BrowserRouter */}
    {/* <App01 /> */}

    {/* 4.2 createBrowserRouter */}
    {/* <RouterProvider router={router02} /> */}

    {/* 4.3 errorElement */}
    {/* <RouterProvider router={router03} /> */}

    {/* 4.4 useNavigate */}
    {/* <RouterProvider router={router04} /> */}

    {/* 4.5 useParams */}
    {/* <RouterProvider router={router05} /> */}

    {/* 4.6 Outlet */}
    {/* <RouterProvider router={router06} /> */}

    {/* 4.7 useOutletContext */}
    {/* <RouterProvider router={router07} /> */}

    {/* 4.8 Extras */}
    <RouterProvider router={router08} />
  </StrictMode>
);
