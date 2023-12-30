import React, { ReactNode, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import ChannelListAreaItem from "../../atoms/channel-list-area-item";

type Props = {
  isSelectedChannelItemIndex?: number | null;
  onClickChannelItem: (index: number) => void;
  collapseTitle?: ReactNode;
  channelsIcon?: ReactNode;
};

function ChannelListSectionCollapse(props: Props) {
  const {
    isSelectedChannelItemIndex,
    onClickChannelItem,
    collapseTitle,
    channelsIcon,
  } = props;

  const [isCollapseOpen, setIsCollapseOpen] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapseOpen((prev) => !prev);
  };

  return (
    <motion.div className="">
      <div
        onClick={() => handleToggleCollapse()}
        className="flex items-center gap-1 py-2 text-xs font-semibold cursor-pointer select-none text-main-white-3 hover:text-main-white-2"
      >
        <motion.div
          animate={{ rotate: isCollapseOpen ? 0 : -90 }}
          //   transition={{ duration: 0.2 }}
        >
          <FaAngleDown />
        </motion.div>
        <div className="">
          <span>{collapseTitle}</span>
        </div>
      </div>
      <AnimatePresence>
        {isCollapseOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            // transition={{ duration: 0.2 }}
            className="flex flex-col gap-1"
          >
            {[...Array(4)].map((item, index) => (
              <ChannelListAreaItem
                key={index}
                leftIcon={channelsIcon}
                title={"Channel - " + index}
                index={index}
                isSelected={index === isSelectedChannelItemIndex}
                onClickItem={(index: number) => onClickChannelItem(index)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ChannelListSectionCollapse;
