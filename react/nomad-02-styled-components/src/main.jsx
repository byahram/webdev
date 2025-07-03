import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
// import { ThemeProvider } from "styled-components";
import App from "./App.jsx";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

// const lightTheme = {
//   textColor: "#111",
//   backgroundColor: "whitesmore",
// };

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
