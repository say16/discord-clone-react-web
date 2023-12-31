import React, { ReactNode, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import SelectableItem from "../../atoms/selectable-item";

type Props = {
  selectedChannelItemIndex?: number | null;
  selectedChannelItem: any;
  onClickChannelItem: (e: any) => void;
  collapseTitle?: ReactNode;
  channelsIcon?: ReactNode;
  channelsData: { id: string; type: string; title?: string }[];
};

function ChannelListSectionCollapse(props: Props) {
  const {
    selectedChannelItemIndex,
    selectedChannelItem,
    onClickChannelItem,
    collapseTitle,
    channelsIcon,
    channelsData,
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
        <motion.div animate={{ rotate: isCollapseOpen ? 0 : -90 }}>
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
            className="flex flex-col gap-1"
          >
            {channelsData?.map((item, index) => (
              <SelectableItem
                key={index}
                leftIcon={channelsIcon}
                title={item?.title}
                index={index}
                item={item}
                isSelected={item?.id === selectedChannelItem?.id}
                onClickItem={(e) => onClickChannelItem(e)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ChannelListSectionCollapse;
