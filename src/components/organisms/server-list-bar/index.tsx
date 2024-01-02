import { useState } from "react";
import ServerListBarItem from "../../atoms/server-list-bar-item";
import { FaDiscord } from "react-icons/fa6";

function ServerListBar() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onClickItem = (selectedIndex: number) => {
    console.log(selectedIndex, "selectedIndex");
    setSelectedIndex(selectedIndex);
  };

  return (
    <div className="py-3 overflow-y-auto bg-main-gray-1">
      <div className="flex flex-col items-center gap-2">
        <ServerListBarItem
          index={0}
          isSelected={selectedIndex === 0}
          onClickItem={(selectedIndex) => onClickItem(selectedIndex)}
          tooltipContent={"Direkt Mesajlar"}
          linkTo="/channels/@me"
        >
          <FaDiscord className="w-full h-full p-2" />
        </ServerListBarItem>
        <hr className="w-8 mx-2 border-[1.5px] rounded-full border-main-white-1/10" />
        {[...Array(10)].map((item, index) => {
          const isSelected = selectedIndex === index + 1;
          return (
            <ServerListBarItem
              index={index + 1}
              isSelected={isSelected}
              onClickItem={(selectedIndex) => onClickItem(selectedIndex)}
              linkTo={"/channels/" + index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ServerListBar;
