import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

export default function App02() {
  return (
    <ul>
      <li>
        <Title>#4.2 createBrowserRouter</Title>
        <Header />
        <Outlet />
      </li>
    </ul>
  );
}

const Title = styled.h2`
  font-weight: 700;
`;
