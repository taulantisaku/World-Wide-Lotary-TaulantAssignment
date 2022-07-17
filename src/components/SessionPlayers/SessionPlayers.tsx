import "../SessionPlayers/SessionPlayers.scss";

import User from "../User/User";
import { useUserContext } from "../../lib/context/UserContext";

export interface SessionProps {
  user: any;
}

export const SessionPlayers = () => {
  const { user, userList } = useUserContext();

  if (!userList) {
    return <>No users..</>;
  }

  return (
    <div className="SessionPlayers">
      {userList && (
        <>
          {userList.map((user) => (
            <User user={user} key={user.id.value} />
          ))}
        </>
      )}
    </div>
  );
};

export default SessionPlayers;
