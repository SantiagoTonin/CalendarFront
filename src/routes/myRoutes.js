import Landing from "../components/landingPage/Landing";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import { Route, Routes } from "react-router-dom";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MyRoutes;
