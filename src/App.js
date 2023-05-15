import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";
import MyRoutes from './routes/myRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
