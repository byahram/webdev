import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import BasicAnimation from "./pages/BasicAnimation";
import VariantsP1 from "./pages/VariantsP1";
import VariantsP2 from "./pages/VariantsP2";
import GesturesP1 from "./pages/GesturesP1";
import GesturesP2 from "./pages/GesturesP2";
import MotionValuesP1 from "./pages/MotionValuesP1";
import MotionValuesP2 from "./pages/MotionValuesP2";
import MotionValuesP3 from "./pages/MotionValuesP3";
import SvgAnimation from "./pages/SvgAnimation";
import AnimatePresence from "./pages/AnimatePresence";
import SliderP1 from "./pages/SliderP1";
import SliderP2 from "./pages/SliderP2";
import MustWatch from "./pages/MustWatch";
import FinalProjectP1 from "./pages/FinalProjectP1";
import FinalProjectP2 from "./pages/FinalProjectP2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "02_basic_animation", element: <BasicAnimation /> },
      { path: "03_variants_p1", element: <VariantsP1 /> },
      { path: "04_variants_p2", element: <VariantsP2 /> },
      { path: "05_gestures_p1", element: <GesturesP1 /> },
      { path: "06_gestures_p2", element: <GesturesP2 /> },
      { path: "07_motionvalues_p1", element: <MotionValuesP1 /> },
      { path: "08_motionvalues_p2", element: <MotionValuesP2 /> },
      { path: "09_motionvalues_p3", element: <MotionValuesP3 /> },
      { path: "10_svg_animation", element: <SvgAnimation /> },
      { path: "11_animate_presence", element: <AnimatePresence /> },
      { path: "12_slider_p1", element: <SliderP1 /> },
      { path: "13_slider_p2", element: <SliderP2 /> },
      { path: "14_must_watch", element: <MustWatch /> },
      { path: "15_final_project_p1", element: <FinalProjectP1 /> },
      { path: "16_final_project_p2", element: <FinalProjectP2 /> },
    ],
  },
]);

export default router;
