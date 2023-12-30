import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  index: number;
  isSelected: boolean;
  onClickItem?: (activeItemIndex: number) => void;
};

function ServerListBarItem(props: Props) {
  const { index, isSelected } = props;
  const [isHovered, setIsHovered] = useState(false);

  const circleVariants = {
    open: { height: isSelected ? "40px" : isHovered ? "20px" : "8px" },
  };

  const onClickItemHandler = (activeIndex: number) => {
    props.onClickItem && props.onClickItem(activeIndex);
  };

  return (
    <div key={index} className="relative flex w-[72px] px-3">
      <motion.div
        className="absolute left-0 w-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2"
        variants={circleVariants}
        animate="open"
      />
      <motion.div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onClickItemHandler(index ?? 0)}
        className={`h-12 w-12 cursor-pointer transition-all
        ${
          isSelected
            ? "bg-main-blue rounded-2xl"
            : "bg-main-gray-4 hover:bg-main-blue hover:rounded-2xl rounded-[50%]"
        }
        `}
      >
        <div className="flex items-center justify-center w-full h-full text-main-white-2">
          <span className="text-[10px]">OmrSy</span>
        </div>
      </motion.div>
    </div>
  );
}

export default ServerListBarItem;
