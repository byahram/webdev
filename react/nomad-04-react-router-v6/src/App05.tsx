import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header02 from "./components/Header02";

export default function App05() {
  return (
    <ul>
      <li>
        <Title>#4.5 useParams</Title>
        <Header02 />
        <Outlet />
      </li>
    </ul>
  );
}

const Title = styled.h2`
  font-weight: 700;
`;
