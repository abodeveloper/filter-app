import React from "react";
import DashboardHeader from "./components/dashboard-header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardHeader />
      {children}
    </div>
  );
};

export default DashboardLayout;
