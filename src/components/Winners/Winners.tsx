import { useUserContext } from "../../lib/context/UserContext";
import User from "../User/User";

export const Winners = () => {
  const { userList } = useUserContext();

  const winners = userList.filter((user) => user.isWinner === true);

  return (
    <div className="Winners">
      <h1>The winners are:</h1>
      {winners && (
        <>
          {winners.map((user) => (
            <User user={user} key={user.id.value} />
          ))}
        </>
      )}
    </div>
  );
};

export default Winners;
