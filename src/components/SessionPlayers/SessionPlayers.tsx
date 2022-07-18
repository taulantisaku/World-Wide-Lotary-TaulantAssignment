import { useState } from "react";
import User from "../User/User";
import { ExportToCsv } from "export-to-csv";
import "../SessionPlayers/SessionPlayers.scss";
import { useUserContext } from "../../lib/context/UserContext";

export const SessionPlayers = () => {
  const { userList } = useUserContext();
  const [toggleSort, setToggleSort] = useState<boolean>(false);

  if (!userList) {
    return <>No users..</>;
  }

  const sortedDsc = userList.sort(
    (objA, objB) => Number(objB.date) - Number(objA.date)
  );

  const handleToggle = () => {
    setToggleSort(!toggleSort);
  };

  const sortedlist = (
    <>
      {toggleSort ? (
        <>
          <button className="SessionPlayers__SortButton" onClick={handleToggle}>
            ASCENDING :
          </button>
          <div className="SessionPlayers">
            {sortedDsc.map((user: any) => (
              <User user={user} key={user.id.value} />
            ))}
          </div>
        </>
      ) : (
        <>
          <button className="SessionPlayers__SortButton" onClick={handleToggle}>
            DESCENDING :
          </button>
          <div className="SessionPlayers">
            {sortedDsc
              .map((user: any) => <User user={user} key={user.id.value} />)
              .reverse()}
          </div>
        </>
      )}
    </>
  );

  const options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: true,
    title: "All lotary players",
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };

  const csvExporter = new ExportToCsv(options);
  const handleDownload = () => {
    csvExporter.generateCsv(sortedDsc);
  };
  // clears array from memory, but the UI should re-render to view changes
  const handleClear = () => {
    while (sortedDsc.length > 0) {
      sortedDsc.pop();
    }
  };

  return (
    <div>
      <h1>List of all players:</h1>
      {userList && <>{sortedlist}</>}
      <button className="SessionPlayers__ClearButton" onClick={handleClear}>
        Clear list
      </button>
      <button className="SessionPlayers__SaveButton" onClick={handleDownload}>
        Save players...
      </button>
    </div>
  );
};

export default SessionPlayers;
