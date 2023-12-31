import React, { ReactNode, useEffect, useState } from "react";

type Props = {
  title?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClickItem?: (activeItem?: {}, activeIndex?: number | undefined) => void;
  isSelected?: boolean;
  index?: number;
  item?: any;
  mainContainerClass?: React.ComponentProps<"div">["className"];
};

type OnClickItemHandlerType = {
  activeItem?: {};
  activeIndex?: number | undefined;
};

function SelectableItem(props: Props) {
  const {
    title,
    leftIcon,
    rightIcon,
    isSelected,
    index,
    item,
    mainContainerClass,
    onClickItem,
  } = props;

  const [mainDivStyle, setMainDivStyle] = useState("hover:bg-white/5");
  const [titleStyle, setTitleStyle] = useState("text-main-white-3");

  useEffect(() => {
    if (isSelected) {
      setMainDivStyle("bg-item-selected");
      setTitleStyle("text-main-white-1");
    } else {
      setMainDivStyle("hover:bg-item-hover");
      setTitleStyle("text-main-white-3 group-hover:text-main-white-2");
    }
  }, [isSelected]);

  const onClickItemHandler = (
    onClickItemHandlerType: OnClickItemHandlerType
  ) => {
    const { activeItem, activeIndex } = onClickItemHandlerType;
    onClickItem && onClickItem({ activeItem, activeIndex });
  };

  return (
    <div
      onClick={() =>
        onClickItemHandler({ activeItem: item, activeIndex: index })
      }
      className="group"
    >
      <div
        className={`group flex items-center gap-1 px-2 rounded cursor-pointer transition-all select-none h-8 ${mainDivStyle} ${mainContainerClass}`}
      >
        {leftIcon && (
          <div className={"transition-all text-base" + " " + titleStyle}>
            {leftIcon}
          </div>
        )}
        {title && (
          <div
            className={"transition-all font-medium text-sm" + " " + titleStyle}
          >
            {title}
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectableItem;
