import React from "react";
import { FaAngleDown } from "react-icons/fa6";

function ChannelListAreaHeader() {
  return (
    <div className="w-full px-4 bottom-shadow-1 h-[48px] flex items-center justify-between cursor-pointer hover:bg-white/5 transition-all">
      <span className="w-full text-sm font-semibold text-main-white-1">
        omer-say-work-test
      </span>
      <span className="text-sm font-semibold text-main-white-2">
        <FaAngleDown />
      </span>
    </div>
  );
}

export default ChannelListAreaHeader;
