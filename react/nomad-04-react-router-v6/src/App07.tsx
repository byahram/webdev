import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header02 from "./components/Header02";

export default function App07() {
  return (
    <>
      <Title>#4.7 useOutletContext</Title>
      <Header02 />
      <Outlet context={{ darkMode: true }} />
    </>
  );
}

const Title = styled.h2`
  font-weight: 700;
`;
