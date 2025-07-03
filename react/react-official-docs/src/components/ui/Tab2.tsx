import React from "react";
import Gallery from "./Tab2_Gallery";

const Tab2: React.FC = () => {
  return (
    <article id="importing-and-exporting">
      <h2 className="text-2xl font-semibold">
        02. 컴포넌트 Import 및 Export하기
      </h2>
      <div className="flex mt-10">
        <Gallery />
      </div>
    </article>
  );
};

export default Tab2;
