import "../Home/Home.scss";
import User from "../User/User";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../lib/context/UserContext";

export const Home = () => {
  const { user } = useUserContext();

  return (
    <div className="Home">
      <div className="Home__header">
        <ul className="Home__header__navlist">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/winners">Winners</NavLink>
          <NavLink to="/players">Session Players</NavLink>
          <NavLink to="/stats">Statistics</NavLink>
        </ul>
      </div>
      <div className="Home__ButtonSection"></div>
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
