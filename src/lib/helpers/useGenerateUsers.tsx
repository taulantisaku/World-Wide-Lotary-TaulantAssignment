import axios from "axios";
import { useQuery } from "react-query";

const useGenerateUsers = () => {
  const { isLoading, isError, data, refetch } = useQuery(
    ["query-users"],
    async () => {
      const response = await axios.get(
        `https://randomuser.me/api?page={pageIndex}`
      );
      const user = await response.data.results[0];
      const userAge = response.data.results[0].dob.age;
      const ranNum = Math.floor(Math.random() * 100);
      if (ranNum === userAge) {
        alert("THE WINNER IS: " + user.name.first);
      }
      return user;
    },
    {
      enabled: false,
    }
  );
  return <div>generateUsers</div>;
};

export default useGenerateUsers;
