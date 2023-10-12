import { Outlet } from "react-router-dom";
import * as s from "./styled";

const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <s.Footer>© 2023 Engelundutvikling.no</s.Footer>
    </>
  );
};

export default Layout;
