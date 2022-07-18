import Home from "./components/Home/Home";
import { Routess } from "./routes/Routes";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  return (
    <div>
      <Home />
      <Routess />
    </div>
  );
}

export default App;
