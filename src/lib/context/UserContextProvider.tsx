import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import { UserContextType, UserContext } from "./UserContext";

interface UserContextProviderProps {
  children: React.ReactNode | null;
}

export const UserContextProvider = (props: UserContextProviderProps) => {
  const [user, setUser] = useState<null>(null);
  const { isLoading, isError, data, refetch } = useQuery(
    ["query-users"],
    async () => {
      const response = await axios.get(
        `https://randomuser.me/api?page={pageIndex}`
      );
      const user = await response.data.results[0];
      const userAge = response.data.results[0].dob.age;
      const ranNum = Math.floor(Math.random() * 100);
      console.log(user);
      // console.log("Name: ", user.name.first);
      // console.log("userAge", userAge);
      // console.log("ranNum", ranNum);
      if (ranNum === userAge) {
        alert("THE WINNER IS: " + user.name.first);
      }
      return user;
    },
    {
      enabled: true,
    }
  );
  // eslint-disable-line react-hooks/exhaustive-deps
  setUser(data);
  const context: UserContextType = {
    user: user,
    isWinner: false,
    setUser: () => {},
    refetch: () => {},
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
};
