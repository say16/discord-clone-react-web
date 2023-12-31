import { Outlet } from "react-router-dom";
import ServerListBar from "../components/organisms/server-list-bar";
import ChannelListArea from "../components/organisms/channel-list-area";

function MainLayout() {
  return (
    <div className="flex w-full h-full">
      <div className="flex h-full w-fit">
        <ServerListBar />
        <ChannelListArea />
      </div>
      <div className="w-full h-full bg-main-gray-4">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
