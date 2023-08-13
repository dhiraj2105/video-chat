import React from "react";
import { useAppSelector } from "../app/hooks";
import useAuth from "../hooks/useAuth";

function Dashboard() {
  useAuth();
  return <div>Dashboard</div>;
}

export default Dashboard;
