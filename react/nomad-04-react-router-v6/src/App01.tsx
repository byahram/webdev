import styled from "styled-components";
import Router01 from "./router/Router01";

function App01() {
  return (
    <ul>
      <li>
        <Title>#4.1 BrowserRouter</Title>
        <Router01 />
      </li>
    </ul>
  );
}

export default App01;

const Title = styled.h2`
  font-weight: 700;
`;

// const FlexWrap = styled.div`
//   display: flex;
// `;
