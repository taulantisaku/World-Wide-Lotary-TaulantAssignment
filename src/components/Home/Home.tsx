import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useUserContext } from "../../lib/context/UserContext";
import "../Home/Home.scss";
import User from "../User/User";

export const Home = () => {
  const { user, genButton } = useUserContext();

  // console.log(data);

  return (
    <div className="Home">
      <div className="Home__header">
        <ul className="Home__header__navlist">
          <li>Home</li>
          <li>Winners</li>
          <li>Session Players</li>
          <li>Statistics</li>
        </ul>
      </div>
      <div className="Home__ButtonSection">
        {/* <button
          onClick={genButton}
          className="Home__ButtonSection__GenerateButton"
        >
          Generate user
        </button> */}
      </div>
      {user && (
        <>
          <div className="Home__User">
            <User user={user} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
