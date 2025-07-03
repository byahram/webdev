import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

export default function Home04() {
  const [readSearchParams, setSearchParams] = useSearchParams();
  console.log(readSearchParams.has("day"));

  setTimeout(() => {
    setSearchParams({
      day: "today",
      tomorrow: "123",
    });
  }, 3000);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
