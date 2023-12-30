import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function ChannelListAreaSection(props: Props) {
  const { children } = props;
  return <div className="flex flex-col gap-1 px-2 py-3">{children}</div>;
}

export default ChannelListAreaSection;
