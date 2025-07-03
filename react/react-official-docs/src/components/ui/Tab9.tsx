import React from "react";
import FancyText from "./Tab9_FancyText";
import InspirationGenerator from "./Tab9_InspirationGenerator";
import Copyright from "./Tab9_Copyright";

const Tab9: React.FC = () => {
  return (
    <article id="ui-as-a-tree">
      <h2 className="text-3xl font-semibold">09. 트리로서의 UI</h2>
      <div>
        <FancyText title text="Get Inspired App" />
        <InspirationGenerator>
          <Copyright year={2004} />
        </InspirationGenerator>
      </div>
    </article>
  );
};

export default Tab9;
