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
          <button onClick={handleToggle}>ASCENDING :</button>
          <div className="SessionPlayers">
            {sortedDsc.map((user: any) => (
              <User user={user} key={user.id.value} />
            ))}
          </div>
        </>
      ) : (
        <>
          <button onClick={handleToggle}>ASCENDING :</button>
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
  return <div>{userList && <>{sortedlist}</>}</div>;
};

export default SessionPlayers;
