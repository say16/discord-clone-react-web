import { useState } from "react";
import ServerListBarItem from "../../atoms/server-list-bar-item";

function ServerListBar() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onClickItem = (selectedIndex: number) => {
    console.log(selectedIndex, "selectedIndex");
    setSelectedIndex(selectedIndex);
  };

  return (
    <div className="py-3 overflow-y-auto bg-main-gray-1">
      <div className="flex flex-col items-center gap-2">
        {[...Array(10)].map((item, index) => {
          const isSelected = selectedIndex === index;
          return (
            <ServerListBarItem
              index={index}
              isSelected={isSelected}
              onClickItem={(selectedIndex) => onClickItem(selectedIndex)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ServerListBar;
