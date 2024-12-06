import { Outlet, Navigate } from "react-router";
import {useAuthUser} from "../providers/AuthProvider"

export const ProtectedRoutes = () => {
  const { authUser } = useAuthUser();
  if (authUser) return <Outlet />;
  <Navigate to={"/sign-in"} />;
};
