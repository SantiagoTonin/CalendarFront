import { useNavigate } from "react-router-dom";

export const RedirectTo = (path) => {
  const navigate = useNavigate();
  navigate(path);
};