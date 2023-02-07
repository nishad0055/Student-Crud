import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = React.useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <h2> .......loading </h2>;
  }

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};
export default PrivateRoute;
