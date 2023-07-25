import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes/myRoutes";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyRoutes />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
