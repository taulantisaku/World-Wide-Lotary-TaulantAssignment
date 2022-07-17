import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./components/Home/Home";
import SessionPlayers from "./components/SessionPlayers/SessionPlayers";
import Statistics from "./components/Statistics/Statistics";
import Winners from "./components/Winners/Winners";

import { UserContext } from "./lib/context/UserContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      {/* <SessionPlayers /> */}
    </QueryClientProvider>
  );
}

export default App;
