import { Outlet, Navigate } from "react-router";
import {useAuthUser} from "../providers/AuthProvider"

export const AdminRoutes = () => {
  const { authUser } = useAuthUser();
  if (authUser?.roles?.includes("admin")) return <Outlet />;
  else <Navigate to={"/"} />;
};
