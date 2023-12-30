import { Outlet } from "react-router-dom";
import ServerListBar from "../components/organisms/server-list-bar";
import ChannelListArea from "../components/organisms/channel-list-area";

function MainLayout() {
  return (
    <div className="w-full h-full">
      <div className="flex w-full h-full">
        <ServerListBar />
        <ChannelListArea />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
