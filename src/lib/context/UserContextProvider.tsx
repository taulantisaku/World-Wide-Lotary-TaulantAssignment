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

  const { isLoading, isError, data, refetch } = useQuery(
    ["query-users"],
    async () => {
      const response = await axios.get(
        `https://randomuser.me/api?page={pageIndex}`
      );
      const user = await response.data.results[0];
      const userAge = response.data.results[0].dob.age;
      const ranNum = Math.floor(Math.random() * 100);
      // console.log("user", user);
      setUser(user);

      userList.push(user);
      setUserList(userList);

      console.log("userList", userList);
      if (userAge === ranNum) {
        setIsWinner(true);
      }
      return user;
    },
    {
      enabled: false,
    }
  );
  // console.log(data);
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
