import "../SessionPlayers/SessionPlayers.scss";

import { useUserContext } from "../../lib/context/UserContext";
import { useEffect } from "react";

export interface SessionProps {
  user: any;
}
export const SessionPlayers = () => {
  const { user, setUser } = useUserContext();

  // console.log("user", user);
  // console.log("isWinner", isWinner);

  return <div></div>;
};

export default SessionPlayers;
