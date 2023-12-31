import React from "react";

type Props = {
  children?: React.ReactNode;
  title?: string;
  titleIcon?: React.ReactNode;
};

function MainLayoutHeader(props: Props) {
  const { children, title, titleIcon } = props;
  return (
    <header className="px-4 bottom-shadow-1 h-[48px] flex items-center">
      <div className="flex items-center w-full h-6">
        {/* ICON & TITLE */}
        <div className="flex items-center gap-3 text-main-white-1">
          <div className="text-2xl text-main-white-3">{titleIcon}</div>
          <span className="text-sm font-semibold">{title}</span>
        </div>
        {/* ICON & TITLE */}

        {/* CUSTOM CONTENT */}
        {children}
        {/* CUSTOM CONTENT */}
      </div>
    </header>
  );
}

export default MainLayoutHeader;
