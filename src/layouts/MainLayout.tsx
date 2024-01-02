import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ServerListBar from "../components/organisms/server-list-bar";
import { useEffect } from "react";

function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/channels/@me");
    }
  }, [location]);

  return (
    <div className="flex w-full h-full">
      <aside className="flex h-full w-fit">
        <ServerListBar />
      </aside>
      <div className="w-full h-full bg-main-gray-4">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
