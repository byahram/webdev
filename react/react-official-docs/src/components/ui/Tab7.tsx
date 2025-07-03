import React from "react";

export interface Person {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
}

export const people2: Person[] = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

const people: string[] = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

function getImageUrl(person: Person): string {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

export default function Tab7() {
  const listItems = people.map((person, index) => (
    <li key={index}>{person}</li>
  ));

  const chemists = people2.filter((person) => person.profession === "chemist");
  const listItems2 = chemists.map((person) => (
    <li key={person.id} className="mb-4">
      <img src={getImageUrl(person)} alt={person.name} width={100} />
      <p>
        <b>{person.name}:</b> {person.profession} <br />
        Known for {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <article id="rendering-lists">
      <h2 className="text-3xl font-semibold">07. 리스트 렌더링</h2>
      <div>
        <ul>{listItems}</ul>
        <hr className="my-5" />
        <ul>{listItems2}</ul>
      </div>
    </article>
  );
}
