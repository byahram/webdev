import React from "react";

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

interface Person {
  name: string;
  theme: {
    backgroundColor: string;
    color: string;
  };
}

const person: Person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

const Tab4: React.FC = () => {
  const avatar: string = "https://i.imgur.com/7vQD0fPs.jpg";
  const description: string = "Gregorio Y. Zara";
  const name: string = "Gregorio Y. Zara";
  const today: Date = new Date();

  return (
    <article id="curly-braces">
      <h2 className="text-3xl font-semibold">
        04. 중괄호가 있는 TSX에서 자바스크립트 사용하기
      </h2>
      <div>
        <img className="avatar" src={avatar} alt={description} />
        <hr className="my-5" />

        <h1>{name}&apos;s Todo List</h1>
        <hr className="my-5" />

        <h1>To Do List for {formatDate(today)}</h1>
        <hr className="my-5" />

        <ul
          style={{
            backgroundColor: "black",
            color: "pink",
          }}
        >
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
        <hr className="my-5" />

        <div style={person.theme}>
          <h1>{person.name}&apos;s Todos</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/7vQD0fPs.jpg"
            alt="Gregorio Y. Zara"
          />
          <ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Tab4;
