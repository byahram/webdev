import React from "react";

const Profile: React.FC = () => {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
};

const Tab1: React.FC = () => {
  return (
    <article id="first-component">
      <h2 className="text-2xl font-semibold">01. 첫 번째 컴포넌트</h2>
      <div className="flex mt-10">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </article>
  );
};

export default Tab1;
