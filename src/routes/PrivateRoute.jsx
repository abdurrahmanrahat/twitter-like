import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import Loading from "../components/Loading/Loading";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!loading && !user?.email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
