import styled, { keyframes } from "styled-components";

function App() {
  return (
    <ul>
      <li>
        <Title>#2.1 First Styled Component</Title>
        <Father>
          <Box1>
            <Text>Hello</Text>
          </Box1>
          <Box11 />
        </Father>
      </li>
      <li>
        <Title>#2.2 Adapting and Extending (w/ Props)</Title>
        <Father>
          <Box2 bgColor="teal" />
          <Box2 bgColor="tomato" />
          <Circle bgColor="grey" />
        </Father>
      </li>
      <li>
        <Title>#2.3 'As' and Attrs</Title>
        <Father>
          <Btn>Log in</Btn>
          <Btn as="a" href="/">
            button
          </Btn>
        </Father>
        <Child>
          <Input />
          <Input />
          <Input />
          <Input />
        </Child>
      </li>
      <li>
        <Title>#2.4 Animations and Pseudo Selectors</Title>
        <Wrapper>
          <Box4>
            <span>👻</span>
          </Box4>
        </Wrapper>
      </li>
      <li>
        <Title>#2.5 Pseudo Selectors part two.</Title>
        <Wrapper>
          <Box5>
            <Emoji>👻</Emoji>
          </Box5>
          <Emoji>👻</Emoji>
        </Wrapper>
      </li>
      <li>
        <Title>#2.6 Super Recap</Title>
        <Wrapper>
          <Box6 bgColor="skyblue" />
          <Circle6 bgColor="purple" />
        </Wrapper>
        <Wrapper>
          <Btn6 as="a">Log in</Btn6>
        </Wrapper>
        <H1Title>Hello!</H1Title>
        <Wrapper6>
          <H1Title>Hello!</H1Title>
        </Wrapper6>
      </li>
      <li>
        <Title>#2.7 Themes</Title>
        <Wrapper7>Hello</Wrapper7>
      </li>
    </ul>
  );
}

export default App;

// #2.7
const Wrapper7 = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;

// #2.6
const H1Title = styled.h1`
  color: tomato;
  &:hover {
    color: teal;
  }
`;
const Wrapper6 = styled.div`
  background-color: beige;
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  ${H1Title}:hover {
    font-size: 99px;
  }
  /* h1 {
    color: tomato;

    &:hover {
      color: teal;
    }
  } */
`;
const anim = keyframes`
  from {color: tomato;}
  to {color: teal;}
`;
const Box6 = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle6 = styled(Box6)`
  border-radius: 50px;
`;

const Btn6 = styled.button`
  background-color: whitesmoke;
  border: 1px solid black;
  padding: 10px;
  animation: ${anim} 0.5s infinite;
`;

// #2.5
const Emoji = styled.span`
  font-size: 36px;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Box5 = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;

  ${Emoji} {
    font-size: 36px;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

// #2.4
const Wrapper = styled.div`
  display: flex;
`;

const Box4 = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;

  span {
    font-size: 36px;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

// #2.3
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
  width: 100px;
  height: 50px;
`;

const Child = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const Input = styled.input.attrs({ required: true, maxLength: 10 })`
  background-color: white;
`;

// #2.2
const Box2 = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box2)`
  border-radius: 50px;
`;

// #2.1
const Title = styled.h2`
  font-weight: 700;
`;

const Father = styled.div`
  display: flex;
`;

const Box1 = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

const Box11 = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;
