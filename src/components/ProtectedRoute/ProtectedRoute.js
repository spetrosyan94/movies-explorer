import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, loggedIn, redirectPath = "/", ...props }) => {
  return loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to={redirectPath} replace />
  );
};

export default ProtectedRoute;
