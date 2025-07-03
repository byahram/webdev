import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header02 from "./components/Header02";

export default function App08() {
  return (
    <>
      <Title>#4.8 Extras</Title>
      <Header02 />
      <Outlet context={{ darkMode: true }} />
    </>
  );
}

const Title = styled.h2`
  font-weight: 700;
`;
