import "../SessionPlayers/SessionPlayers.scss";

import { useUserContext } from "../../lib/context/UserContext";

export interface SessionProps {
  user: any;
}

export const SessionPlayers = () => {
  const { userList } = useUserContext();
  console.log("userList", userList);

  if (!userList) {
    return <>No users..</>;
  }

  return (
    <div>
      {userList && (
        <>
          {userList.map((user) => (
            <p>{user.gender}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default SessionPlayers;
