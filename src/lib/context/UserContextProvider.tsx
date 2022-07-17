import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import { UserContextType, UserContext } from "./UserContext";

interface UserContextProviderProps {
  children: React.ReactNode | null;
}

export const UserContextProvider = (props: UserContextProviderProps) => {
  const [user, setUser] = useState<null>(null);
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const [userList, setUserList] = useState<any>([]);
  // const [counter, setCounter] = useState<number>(0);

  const { isLoading, isError, data, refetch } = useQuery(
    ["query-users"],
    async () => {
      const response = await axios.get(
        `https://randomuser.me/api?page={pageIndex}`
      );
      let timesPlayed = 0;
      const user = await response.data.results[0];
      const userAge = response.data.results[0].dob.age;
      const ranNum = Math.floor(Math.random() * 100);
      setUser(user);
      user.isWinner = isWinner;
      user.timesPlayed = timesPlayed;

      if (user.isWinner === true) {
        timesPlayed++;
      }

      if (userAge === ranNum) {
        user.isWinner = true;

        alert("the winner is:" + user.name.first);
      }
      userList.push(user);
      setUserList(userList);
      console.log("user", user);
      console.log("userAge", userAge);
      console.log("ranNum", ranNum);

      // console.log("userList", userList);

      return user;
    },
    {
      enabled: false,
    }
  );

  const handleRefetch = () => {
    refetch();
  };
  const genButton = (
    <>
      {" "}
      <button onClick={handleRefetch}>GENERATE</button>
    </>
  );

  // eslint-disable-line react-hooks/exhaustive-deps

  const context: UserContextType = {
    user: user,
    userList: userList,
    isWinner: isWinner,
    setUser: () => {},
    genButton: () => {},
  };

  return (
    <UserContext.Provider value={context}>
      {genButton}
      {props.children}
    </UserContext.Provider>
  );
};
