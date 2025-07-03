import React from "react";

interface CopyrightProps {
  year: number;
}

const Copyright: React.FC<CopyrightProps> = ({ year }) => {
  return <p className="small">©️ {year}</p>;
};

export default Copyright;
