import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes({
  isAllowed,
  children,
  redirectTo ="/",
}) {
  if (!isAllowed) {
  return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />;
}
