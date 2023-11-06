import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { validRoutes } from "../security/ValidRoutes";
import Abm from "../pages/dashboard/Abm";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import Landing from "../pages/landingPage/Landing";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PassRecovery from "../pages/passrecovery/PassRecovery";
import ChangePasswordPage from "../pages/passrecovery/ChangePasswordPage";
import UserProfile from "../pages/userProfile/UserProfile";
import ErrorPage from "../pages/error404/Error404";
import Publications from "../pages/publications/Publications";
import ProtectedRoutes from "../security/ProtectedRoutes";
import UnderConstruction from "../pages/underConstructionPage/UnderConstruction";
import AboutUs from "../pages/aboutUs/AboutUs";

const MyRoutes = () => {
  const redirect = useLocation();
  const validate = validRoutes(redirect);
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!validate) {
      navigate("/error404");
      return;
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {redirect.pathname !== "/" && redirect.pathname !== "/error404" && (
        <Header />
      )}
      <Routes>
        <Route
          element={<ProtectedRoutes isAllowed={!token} redirectTo={"/home"} />}
        >
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/error404" element={<ErrorPage />} />
        <Route path="/underConstruction" element={<UnderConstruction />} />
        <Route path="/passwordRecovery" element={<PassRecovery />} />
        <Route path="/changePassword" element={<ChangePasswordPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route element={<ProtectedRoutes isAllowed={!!token} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/abm" element={<Abm />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/user/:username" element={<Publications />} />
        </Route>
      </Routes>
      {redirect.pathname !== "/error404" && <Footer />}
    </>
  );
};

export default MyRoutes;
