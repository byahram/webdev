import { useEffect, useState } from "react";

export default function State() {
  const [value, setValue] = useState<number | string>(0);

  useEffect(() => {
    setValue(2);
    setValue("hello");
    console.log("value = ", value);
  });

  return <div>State</div>;
}
