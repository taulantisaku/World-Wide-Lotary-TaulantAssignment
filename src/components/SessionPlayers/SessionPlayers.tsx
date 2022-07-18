import "../SessionPlayers/SessionPlayers.scss";

import User from "../User/User";
import { useUserContext } from "../../lib/context/UserContext";
import { useState } from "react";

export interface SessionProps {
  user: any;
}

export const SessionPlayers = () => {
  const { userList } = useUserContext();
  const [toggleSort, setToggleSort] = useState<boolean>(false);

  if (!userList) {
    return <>No users..</>;
  }

  const sortedDsc = userList.sort(
    (objA, objB) => Number(objB.date) - Number(objA.date)
  );

  const handleToggle = () => {
    setToggleSort(!toggleSort);
  };

  const sortedlist = (
    <>
      {toggleSort ? (
        <>
          <button className="SessionPlayers__SortButton" onClick={handleToggle}>
            ASCENDING :
          </button>
          <div className="SessionPlayers">
            {sortedDsc.map((user: any) => (
              <User user={user} key={user.id.value} />
            ))}
          </div>
        </>
      ) : (
        <>
          <button className="SessionPlayers__SortButton" onClick={handleToggle}>
            DESCENDING :
          </button>
          <div className="SessionPlayers">
            {sortedDsc
              .map((user: any) => <User user={user} key={user.id.value} />)
              .reverse()}
          </div>
        </>
      )}
    </>
  );

  console.log("sortedAsc", sortedDsc);
  return (
    <div>
      <h1>List of all players:</h1>
      {userList && <>{sortedlist}</>}
    </div>
  );
};

export default SessionPlayers;
