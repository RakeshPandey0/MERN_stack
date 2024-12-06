import { Outlet, Navigate } from "react-router";
import {useAuthUser} from "../providers/AuthProvider"

export const GuestRoutes = () => {
  const { authUser } = useAuthUser();
  if (authUser) return <Navigate to="/" />;
  return <Outlet />;
};
