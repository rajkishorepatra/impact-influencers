import { UserAuth } from "../../context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

// export  function PrivateRoute() {
//   const location = useLocation();
//   const { currentUser } = UserAuth();

//   if (currentUser === undefined) {
//     return null; // or loading indicator/spinner/etc
//   }

//   return currentUser ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/login" replace state={{ from: location }} />
//   );
// }

export function RequireAuth({ children }) {
  let { currentUser } = UserAuth();
  return currentUser ? children : <Navigate to={'/login'} />;
}
