export const validRoutes = (path) => {
  const routes = [
    "/",
    "/login",
    "/home",
    "/abm",
    "/register",
    "/userProfile",
    "/passwordRecovery",
    "/changePassword",
    "/userProfile",
  ];

  if (routes.includes(path.pathname)) {
    return true;
  }

  if (path.pathname.startsWith('/user/')) {
    return true;
  }

  return false;
};

export const verifyToken = () => {
  const token = sessionStorage.getItem("token");
  return token ? true : false;
};
