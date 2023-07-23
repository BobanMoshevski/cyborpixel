import { Outlet } from "react-router-dom";
import MainNavigation from "../../components/mainNavigation/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <>
        <Outlet />
      </>
    </>
  );
};

export default RootLayout;