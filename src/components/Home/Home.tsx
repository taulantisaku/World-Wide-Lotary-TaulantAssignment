import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useUserContext } from "../../lib/context/UserContext";
import "../Home/Home.scss";
import User from "../User/User";

export const Home = () => {
  const { user, setUser } = useUserContext();

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

  useEffect(() => {
    axios
      .get("https://randomuser.me/api?page={pageIndex}")
      .then((response) => response.data)
      .then((data) => console.log("DATA FROM USEEFFECT: ", data));
  }, [data]);

  // console.log(data);

  const handleClick = () => {
    refetch();
  };

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
        <button
          onClick={handleClick}
          className="Home__ButtonSection__GenerateButton"
        >
          Generate user
        </button>
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
