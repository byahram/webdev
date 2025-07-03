import styled from "styled-components";

interface ICircle {
  bgColor: string;
}

interface ContainerProps {
  bgColor: string;
}

export default function Circle({ bgColor }: ICircle) {
  return <Container bgColor={bgColor}></Container>;
}

const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "bgColor",
})<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;
