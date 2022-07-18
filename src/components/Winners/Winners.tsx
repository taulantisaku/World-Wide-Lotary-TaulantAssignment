import { useState } from "react";
import { useUserContext } from "../../lib/context/UserContext";
import User from "../User/User";

export const Winners = () => {
  const { userList } = useUserContext();
  const [toggleSort, setToggleSort] = useState<boolean>(false);

  const winners = userList.filter((user) => user.isWinner === true);

  const sortedDsc = winners.sort(
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
          <div className="Winners">
            {sortedDsc.map((user: any) => (
              <User user={user} key={user.id.value} />
            ))}
          </div>
        </>
      ) : (
        <>
          <button onClick={handleToggle}>ASCENDING :</button>
          <div className="Winners">
            {sortedDsc
              .map((user: any) => <User user={user} key={user.id.value} />)
              .reverse()}
          </div>
        </>
      )}
    </>
  );

  return (
    <div>
      <h1>The winners are:</h1>
      {winners && <>{sortedlist}</>}
    </div>
  );
};

export default Winners;
