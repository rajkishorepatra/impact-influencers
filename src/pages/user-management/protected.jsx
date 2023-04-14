import { UserAuth } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export function RequireAuth({ children }) {
  let { currentUser } = UserAuth();
  let location = useLocation();
  return currentUser ? (
    children
  ) : (
    <Navigate to={'/login'} state={{from: location}} />
  );
}
