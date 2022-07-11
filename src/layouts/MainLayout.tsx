import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { authRequest } from "../services/organization";

import Sidebar from "../components/Sidebar";

function MainLayout() {
  useEffect(() => {
    authRequest({ user: "USERNAME" }).then((response) => {
      // save token to local or session storage and set them to axios headers
    });
  });
  return (
    <div className="wrapper">
      <div className="row">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>
      <footer className="footer">
        <p className="footer__text">
          © 1992 - 2020 Честный Агент © Все права защищены.
        </p>
        <p className="footer__text">8 (495) 150-21-12 </p>
      </footer>
    </div>
  );
}

export default MainLayout;
