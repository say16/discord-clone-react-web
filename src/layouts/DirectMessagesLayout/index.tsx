import React from "react";
import { Outlet } from "react-router-dom";
import DirectMessageAside from "../../components/atoms/direct-message-aside";

function DirectMessagesLayout() {
  return (
    <div className="flex w-full h-full">
      <aside className="flex h-full w-fit">
        <DirectMessageAside />
      </aside>
      <div className="w-full h-full bg-main-gray-4">
        <Outlet />
      </div>
    </div>
  );
}

export default DirectMessagesLayout;