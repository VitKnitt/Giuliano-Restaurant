import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectUserName } from "../page/user/usersSlice";

const ProtectedRoute = () => {
  const userName = useSelector(selectUserName);

  if (!userName) {
    // pokud není přihlášený → přesměruj na /
    return <Navigate to="/" replace />;
  }

  // pokud je přihlášený → zobraz vnořené routy
  return <Outlet />;
};

export default ProtectedRoute;
