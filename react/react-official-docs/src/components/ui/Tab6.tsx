import React from "react";

interface ItemProps {
  name: string;
  isPacked: boolean;
}

function Item({ name, isPacked }: ItemProps) {
  // if/else문
  // if (isPacked) {
  //   return null;
  // }
  // return <li className="item">{name}</li>;

  return (
    // 삼항연산자
    // <li className="item">{isPacked ? name + " ✅" : name}</li>;
    // <li className="item">{isPacked ? <del>{name + " ✅"}</del> : name}</li>

    // AND 연산자
    <li className="item">
      {name} {isPacked && "✅"}
    </li>
  );

  // 변수에 조건부로 JSX를 할당
  // let itemContent = name;
  // if (isPacked) {
  //   itemContent = name + " ✅";
  // }
  // return <li className="item">{itemContent}</li>;
}

export default function Tab6() {
  return (
    <article id="conditional-rendering">
      <h2 className="text-3xl font-semibold">06. 조건부 렌더링</h2>
      <div>
        <h1>Sally Ride&apos;s Packing List</h1>
        <ul>
          <Item isPacked={true} name="Space suit" />
          <Item isPacked={true} name="Helmet with a golden leaf" />
          <Item isPacked={false} name="Photo of Tam" />
        </ul>
      </div>
    </article>
  );
}
