import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { authRestoreSelector, authTokenSelector } from "@store/auth/auth.selectors.js";

function PrivateRoute() {
  const token = useSelector(authTokenSelector);
  const isRestored = useSelector(authRestoreSelector);

  const showOutletCondition = !!token && isRestored; // Outlet
  const showLoaderCondtion = !token && !isRestored; // Loader
  const notAuthCondition = !token; // Navigate

  if (showOutletCondition) {
    return <Outlet />;
  } else if (showLoaderCondtion) {
    return;
  } else if (notAuthCondition) return <div>Ooops unauthorized</div>;
}

export default PrivateRoute;
