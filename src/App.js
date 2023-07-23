import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes/myRoutes";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MyRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
