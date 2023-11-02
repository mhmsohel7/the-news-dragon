import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/shared/NavigationBar/NavigationBar";

const LoginLayout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default LoginLayout;
