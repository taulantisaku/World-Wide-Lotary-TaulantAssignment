import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Howl } from "howler";
import WinnerSound from "../../audio/winner.mp3";
import "../../components/Home/Button.scss";

import { UserContextType, UserContext } from "./UserContext";

interface UserContextProviderProps {
  children: React.ReactNode | null;
}

export const UserContextProvider = (props: UserContextProviderProps) => {
  const [user, setUser] = useState<null>(null);
  const [userList, setUserList] = useState<any>([]);

  const { isLoading, isError, data, refetch } = useQuery(
    ["query-users"],
    async () => {
      const response = await axios.get(
        `https://randomuser.me/api?page={pageIndex}`
      );
      let timesPlayed = 0;
      let isWinner = false;
      const user = await response.data.results[0];
      const userAge = response.data.results[0].dob.age;
      const ranNum = Math.floor(Math.random() * 100);
      setUser(user);
      user.isWinner = isWinner;
      user.timesPlayed = timesPlayed;

      const SoundPlay = async (src: any) => {
        const sound = new Howl({
          src,
          html5: true,
        });
        sound.play();
      };
      if (user.isWinner === true) {
        timesPlayed++;
      }

      if (userAge === ranNum) {
        user.isWinner = true;
        alert("the winner is:" + user.name.first);
        SoundPlay(WinnerSound);
      }
      userList.push(user);
      setUserList(userList);

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
      <button className="ButtonSection__GenerateButton" onClick={handleRefetch}>
        GENERATE
      </button>
    </>
  );

  // eslint-disable-line react-hooks/exhaustive-deps

  const context: UserContextType = {
    user: user,
    userList: userList,
    isWinner: false,
    setUser: () => {},
    genButton: () => {},
  };

  return (
    <UserContext.Provider value={context}>
      <div className="ButtonSection">{genButton}</div>
      {props.children}
    </UserContext.Provider>
  );
};
