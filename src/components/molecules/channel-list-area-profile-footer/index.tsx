import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMicrophoneSlash } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

function ChannelListAreaProfileFooter() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-main-gray-2 h-[52px] px-2 flex items-center"
    >
      <div className="flex h-[42px] items-center gap-px">
        {/* profile */}
        <div className="flex items-center gap-2 hover:bg-item-hover w-[124px] p-1 rounded-md cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-main-white-3" />
          <div className="flex flex-col gap-1">
            <span className="text-xs leading-none text-main-white-1">
              omer say
            </span>
            <motion.div className="flex flex-col h-4 overflow-hidden w-fit">
              <motion.div
                animate={{ translateY: isHovered ? "-50%" : "0%" }}
                className="flex flex-col justify-center"
              >
                <motion.span className="text-xs leading-4 text-main-white-3">
                  Çevrim içi
                </motion.span>
                <motion.span className="text-xs leading-4 text-main-white-3">
                  omer1x1
                </motion.span>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* profile */}
        {/* icons */}
        <div className="flex items-center justify-end gap-px">
          <div className="flex items-center justify-center w-8 h-8 rounded-md cursor-pointer hover:bg-item-hover text-color-hover">
            <FaMicrophoneSlash className="w-5 h-5" />
          </div>
          <div className="flex items-center justify-center w-8 h-8 rounded-md cursor-pointer hover:bg-item-hover text-color-hover">
            <FaHeadphones className="w-5 h-5" />
          </div>
          <div className="flex items-center justify-center w-8 h-8 rounded-md cursor-pointer hover:bg-item-hover text-color-hover">
            <IoMdSettings className="w-5 h-5" />
          </div>
        </div>
        {/* icons */}
      </div>
    </div>
  );
}

export default ChannelListAreaProfileFooter;
