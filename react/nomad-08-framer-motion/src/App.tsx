import styled from "styled-components";

function App() {
  return (
    <Container>
      <li>
        <Title>
          <Link href="/02_basic_animation">#8.2 Basic Animations</Link>
        </Title>
      </li>
      <li>
        <Title>
          <Link href="/03_variants_p1">#8.3 Variants Part.1</Link>
        </Title>
      </li>
      <li>
        <Title>
          <Link href="/04_variants_p2">#8.4 Variants Part.2</Link>
        </Title>
      </li>
      <li>
        <Title>
          <Link href="/05_gestures_p1">#8.5 Gestures Part.1</Link>
        </Title>
      </li>
      <li>
        <Title>
          <Link href="/06_gestures_p2">#8.6 Gestures Part.2</Link>
        </Title>
      </li>
      <li>
        <Title>
          <Link href="/07_motionvalues_p1">#8.7 MotionValues Part.1</Link>
        </Title>
      </li>
      <li>
        <Title>
          <Link href="/08_motionvalues_p2">#8.8 MotionValues Part.2</Link>
        </Title>
      </li>
      <li>
        <Title>
          <Link href="/09_motionvalues_p3">#8.9 MotionValues Part.3</Link>
        </Title>
      </li>
      <li>
        <Title>
          <Link href="/10_svg_animation">#8.10 SVG Animation</Link>
        </Title>
      </li>
      <li>
        <Title>
          <Link href="/11_animate_presence">#8.11 AnimatePresence</Link>
        </Title>
      </li>
      <li>
        <Title>
          <Link href="/12_slider_p1">#8.12 Slider Part.1</Link>
        </Title>
      </li>
      <li>
        <Title>
          <Link href="/13_slider_p2">#8.13 Slider Part.2</Link>
        </Title>
      </li>
      <li>
        <Title>
          <Link href="/14_must_watch">#8.14 You Need to Watch This</Link>
        </Title>
      </li>
      <li>
        <Title>
          <Link href="/15_final_project_p1">#8.15 Final Project Part.1</Link>
        </Title>
      </li>
      <li>
        <Title>
          <Link href="/16_final_project_p2">#8.16 Final Project Part.2</Link>
        </Title>
      </li>
    </Container>
  );
}

export default App;

const Container = styled.ul`
  max-width: 1028px;
  margin: 0 auto;
  padding: 3rem 0;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  outline: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

const Title = styled.h2`
  font-weight: 700;
`;
