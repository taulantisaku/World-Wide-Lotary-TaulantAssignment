import { RouteProps, Routes, Route } from "react-router-dom";

import Home from "../components/Home/Home";
import SessionPlayers from "../components/SessionPlayers/SessionPlayers";
import Statistics from "../components/Statistics/Statistics";
import Winners from "../components/Winners/Winners";

export enum RouteType {
  PUBLIC,
  PRIVATE,
  RESTRICTED,
}

interface AppRoute extends RouteProps {
  type?: RouteType;
}
export const AppRoutes: AppRoute[] = [
  {
    type: RouteType.PUBLIC,
    path: "/Home",
    element: <Home />,
  },
  {
    type: RouteType.PUBLIC,
    path: "/players",
    element: <SessionPlayers />,
  },
  {
    type: RouteType.PUBLIC,
    path: "/winners",
    element: <Winners />,
  },
  {
    type: RouteType.PUBLIC,
    path: "/stats",
    element: <Statistics />,
  },
];

export const Routess = () => {
  return (
    <Routes>
      {AppRoutes.map((r) => {
        const { type, path, ...rest } = r;

        return <Route {...rest} key={`${r.path}`} path={`${r.path}`} />;
      })}
    </Routes>
  );
};
