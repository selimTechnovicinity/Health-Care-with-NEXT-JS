import DashboardDrawer from "@/components/dashboard/dashboardDrawer/DashboardDrawer";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardDrawer children={children}></DashboardDrawer>;
};

export default DashBoardLayout;
