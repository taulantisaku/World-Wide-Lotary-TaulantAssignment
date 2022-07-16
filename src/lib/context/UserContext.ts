import React, { useContext } from "react";
import { UseQueryResult } from "react-query";

export interface UserContextType {
  user: any;
  isWinner: boolean;
  setUser: (value: object) => void;
  refetch: () => void;
}

const UserContextValues: UserContextType = {
  user: null,
  isWinner: false,
  setUser: () => {},
  refetch: () => {},
};

export const UserContext =
  React.createContext<UserContextType>(UserContextValues);

export const useUserContext = () => useContext(UserContext);
