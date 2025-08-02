import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useTodoAppStore } from "../utils/zustand";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const currentUser = useTodoAppStore((state) => state.currentUser);
  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
