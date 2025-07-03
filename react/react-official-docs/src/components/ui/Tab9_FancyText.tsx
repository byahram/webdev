import React from "react";

interface FancyTextProps {
  title?: boolean;
  text: string;
}

const FancyText: React.FC<FancyTextProps> = ({ title, text }) => {
  return title ? (
    <h1 className="fancy title">{text}</h1>
  ) : (
    <h3 className="fancy cursive">{text}</h3>
  );
};

export default FancyText;
