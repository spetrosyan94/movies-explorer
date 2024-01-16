import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props }) => {
  return props.loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/" replace />
  );
};

// const ProtectedRoute = (props) => {
//   return props.loggedIn ? (
//     <Outlet />
//   ) : (
//     <Navigate
//       to="/"
//       replace
//     />
//   );
// };

export default ProtectedRoute;
