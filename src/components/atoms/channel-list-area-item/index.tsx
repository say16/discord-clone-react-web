import React, { ReactNode, useEffect, useState } from "react";

type Props = {
  title?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClickItem?: (activeIndex: number) => void;
  isSelected?: boolean;
  index?: number;
};

function ChannelListAreaItem(props: Props) {
  const { title, leftIcon, rightIcon, isSelected, index } = props;

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

  const onClickItemHandler = (activeIndex: number) => {
    props.onClickItem && props.onClickItem(activeIndex);
  };

  return (
    <div onClick={() => onClickItemHandler(index ?? 1)} className="group">
      <div
        className={
          "flex items-center gap-1 px-2 rounded cursor-pointer h-9 transition-all text-sm" +
          " " +
          mainDivStyle
        }
      >
        <div className={"transition-all font-medium" + " " + titleStyle}>
          {leftIcon}
        </div>
        <div className={"transition-all font-medium" + " " + titleStyle}>
          {title}
        </div>
      </div>
    </div>
  );
}

export default ChannelListAreaItem;
