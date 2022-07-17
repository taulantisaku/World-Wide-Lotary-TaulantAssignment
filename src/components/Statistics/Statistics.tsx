import { useState } from "react";
import { useUserContext } from "../../lib/context/UserContext";

interface NatTypes {
  [key: string]: any;
}
export const Statistics = () => {
  const { userList } = useUserContext();

  const natList = userList.map((user) => user.nat);

  const count = natList.reduce((accumulator, value) => {
    return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
  }, {});

  const arr = Object.entries(count);
  console.log("Object to array => ", arr);
  // const arr = [{ AL: 5 }, { KO: 2 }, { BE: 3 }, { GER: 14 }, { BRA: 8 }];
  // const max = Math.max(...arr);
  // const index = arr.indexOf(max);
  // console.log(Object.values(arr));

  return <div>Statistics</div>;
};

export default Statistics;
