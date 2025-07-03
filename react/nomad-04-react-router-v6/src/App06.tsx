import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header02 from "./components/Header02";

export default function App05() {
  return (
    <>
      <Title>#4.6 Outlet</Title>
      <Header02 />
      <Outlet />
    </>
  );
}

const Title = styled.h2`
  font-weight: 700;
`;
