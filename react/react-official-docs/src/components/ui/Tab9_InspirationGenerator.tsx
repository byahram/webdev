import React from "react";
import FancyText from "./Tab9_FancyText";

const quotes: string[] = [
  "Don’t let yesterday take up too much of today.” — Will Rogers",
  "Ambition is putting a ladder against the sky.",
  "A joy that's shared is a joy made double.",
];

// children을 명시한 props 타입 정의
interface InspirationGeneratorProps {
  children?: React.ReactNode;
}

const InspirationGenerator: React.FC<InspirationGeneratorProps> = ({
  children,
}) => {
  const [index, setIndex] = React.useState<number>(0);
  const quote = quotes[index];
  const next = () => setIndex((index + 1) % quotes.length);

  return (
    <>
      <p>Your inspirational quote is:</p>
      <FancyText text={quote} />
      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
};

export default InspirationGenerator;
