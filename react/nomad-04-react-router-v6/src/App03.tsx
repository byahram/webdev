import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

export default function App03() {
  return (
    <ul>
      <li>
        <Title>#4.3 errorElement</Title>
        <Header />
        <Outlet />
      </li>
    </ul>
  );
}

const Title = styled.h2`
  font-weight: 700;
`;
