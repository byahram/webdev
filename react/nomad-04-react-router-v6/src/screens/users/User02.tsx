import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

export default function User02() {
  const { userId } = useParams();
  return (
    <div>
      <h1>
        User with it {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to={"followers"}>See Followers</Link>
      <Outlet />
    </div>
  );
}
