import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header02 from "./components/Header02";

export default function App04() {
  return (
    <ul>
      <li>
        <Title>#4.4 useNavigate</Title>
        <Header02 />
        <Outlet />
      </li>
    </ul>
  );
}

const Title = styled.h2`
  font-weight: 700;
`;
