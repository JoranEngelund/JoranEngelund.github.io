import { Outlet } from "react-router-dom";
import * as s from "./styled";

const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
