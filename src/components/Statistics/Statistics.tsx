import { useState } from "react";
import { useUserContext } from "../../lib/context/UserContext";

interface NatTypes {
  [key: string]: any;
}
export const Statistics = () => {
  const { userList } = useUserContext();
  const [toggleSort, setToggleSort] = useState<boolean>(false);

  const natList = userList.map((user) => user.nat);

  const count = natList.reduce((accumulator, value) => {
    return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
  }, {});

  const arr = Object.entries(count);
  console.log("Nationality list ", arr);

  //sort descending
  const sortDesc = arr.sort(function (a: any, b: any) {
    return b[1] - a[1];
  });

  const handleToggle = () => {
    setToggleSort(!toggleSort);
  };
  const sortedlist = (
    <>
      {toggleSort ? (
        <ul>
          <button onClick={handleToggle}>ASCENDING :</button>

          {sortDesc.map((nat: any) => (
            <li>{nat.join(" : ")}</li>
          ))}
        </ul>
      ) : (
        <ul>
          <button onClick={handleToggle}>DESCENDING :</button>
          {sortDesc.map((nat: any) => <li>{nat.join(" : ")}</li>).reverse()}
        </ul>
      )}
    </>
  );

  return (
    <div>
      <h1>List of nationality that played the most:</h1>
      {userList && <>{sortedlist}</>}
    </div>
  );
};

export default Statistics;
