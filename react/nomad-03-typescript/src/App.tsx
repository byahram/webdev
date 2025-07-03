import styled from "styled-components";
import Circle from "./Circle";
import Circle2 from "./Circle2";
import State from "./State";
import Form from "./Form";

interface DummyProps {
  text: string;
  active?: boolean;
}

function Dummy({ text, active = false }: DummyProps) {
  return <H1>{active ? text : "not Active"}</H1>;
}

function App() {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <ul>
      <li>
        <Title>#3.2 Typing the Props</Title>
        <FlexWrap>
          <Circle bgColor="tomato" />
          <Circle bgColor="teal" />
        </FlexWrap>
      </li>
      <li>
        <Title>#3.3 Optional Props</Title>
        <FlexWrap>
          <Circle2 bgColor="tomato" borderColor="black" />
          <Circle2 text="This is the message" bgColor="teal" />
        </FlexWrap>
      </li>
      <li>
        <Title>#3.4 State</Title>
        <State />
      </li>
      <li>
        <Title>#3.5 Forms</Title>
        <Form />
      </li>
      <li>
        <Title>#3.6 Themes</Title>
        <Container>
          <H1>Protected</H1>
        </Container>
      </li>
      <li>
        <Title>#3.7 Recap</Title>
        <Container>
          <Dummy active={true} text="hello" />
          <form>
            <button onClick={onClick}>Click Me!</button>
          </form>
        </Container>
      </li>
    </ul>
  );
}

export default App;

const Title = styled.h2`
  font-weight: 700;
`;

const FlexWrap = styled.div`
  display: flex;
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
