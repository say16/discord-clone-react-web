import React from "react";
import ChannelListArea from "../../components/organisms/channel-list-area";
import { Outlet } from "react-router-dom";

function ChannelsLayout() {
  return (
    <div className="flex w-full h-full">
      <aside className="flex h-full w-fit">
        <ChannelListArea />
      </aside>
      <div className="w-full h-full bg-main-gray-4">
        <Outlet />
      </div>
    </div>
  );
}

export default ChannelsLayout;