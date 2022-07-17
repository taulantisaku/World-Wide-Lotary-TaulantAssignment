import React, { useContext } from "react";
import { UseQueryResult } from "react-query";

export interface UserContextType {
  user: any;
  userList: Array<any>;
  isWinner?: boolean;
  setUser: (value: any) => void;
  genButton?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const UserContextValues: UserContextType = {
  user: "test",
  userList: [],
  isWinner: false,
  setUser: () => {},
  genButton: () => {},

};

export const UserContext =
  React.createContext<UserContextType>(UserContextValues);

export const useUserContext = () => useContext(UserContext);
