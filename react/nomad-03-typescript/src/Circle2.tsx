import styled from "styled-components";

interface ICircle {
  bgColor: string; // required
  borderColor?: string; // not required
  text?: string; // not required
}

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

export default function Circle2({
  bgColor,
  borderColor = "red",
  text = "default text",
}: ICircle) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor}>
      {text}
    </Container>
  );
}

const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "borderColor" && prop !== "bgColor",
})<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 3px solid ${(props) => props.borderColor};
`;
