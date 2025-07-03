import React from "react";

// Person & getImageUrl
interface Person {
  name: string;
  imageId: string;
}

function getImageUrl(person: Person, size: "s" | "b" = "s"): string {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

// Avatar
const Avatar: React.FC = () => {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
};

// Avatar2Props & Avatar2
interface Avatar2Props {
  person: Person;
  size: number;
  isSepia?: boolean;
  thickBorder?: boolean;
}

const Avatar2: React.FC<Avatar2Props> = ({ person, size }) => {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
};

// ProfileProps & Profile
interface ProfileProps {
  person: Person;
  size: number;
  isSepia?: boolean;
  thickBorder?: boolean;
}

const Profile: React.FC<ProfileProps> = ({
  person,
  size,
  isSepia,
  thickBorder,
}) => {
  return (
    <div className="card">
      <Avatar2
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
};

// CardProps & Card
interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default function Tab5() {
  return (
    <article id="passing-props">
      <h2 className="text-3xl font-semibold">05. 컴포넌트에 Props 전달하기</h2>
      <div>
        <Avatar />
        <hr className="my-5" />
        <Avatar2
          size={100}
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
        />
        <Avatar2
          size={80}
          person={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
        />
        <Avatar2
          size={50}
          person={{
            name: "Lin Lanying",
            imageId: "1bX5QH6",
          }}
        />
        <hr className="my-5" />
        <Card>
          <Avatar2
            size={100}
            person={{
              name: "Katsuko Saruhashi",
              imageId: "YfeOqp2",
            }}
          />
        </Card>
      </div>
    </article>
  );
}
