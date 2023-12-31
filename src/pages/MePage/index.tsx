import React, { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import SelectableItem from "../../components/atoms/selectable-item";

function MePage() {
  const [selectedTabItemId, setSelectedTabItemId] = useState("");

  const onClickChannelItem = (item: any) => {
    setSelectedTabItemId(item?.activeItem?.id);
  };

  const tabData = [
    {
      id: "0",
      title: "Cevrimici",
    },
    {
      id: "1",
      title: "Tumu",
    },
    {
      id: "2",
      title: "Beklenen",
    },
    {
      id: "3",
      title: "Engellenen",
    },
  ];

  return (
    <div>
      <header className="px-4 bottom-shadow-1 h-[48px] flex items-center">
        <div className="flex items-center justify-between w-full h-6">
          <div className="flex items-center h-full gap-4">
            {/* ICON & TITLE */}
            <div className="flex items-center h-full">
              <div className="flex items-center gap-3 text-main-white-1">
                <div className="text-2xl text-main-white-3">
                  <FaUserFriends />
                </div>
                <span className="text-sm font-semibold">Arkadaşlar</span>
              </div>
            </div>
            {/* ICON & TITLE */}
            <div className="w-px h-full rounded-full bg-main-white-1/10" />
            {/* CUSTOM CONTENT */}
            <div className="flex items-center h-full gap-1">
              {tabData.map((item, index) => (
                <SelectableItem
                  key={index}
                  title={item?.title}
                  index={index}
                  item={item}
                  isSelected={item?.id === selectedTabItemId}
                  onClickItem={(e) => onClickChannelItem(e)}
                  mainContainerClass="h-6"
                />
              ))}
            </div>
            {/* CUSTOM CONTENT */}
          </div>
          <div className="flex items-center">DM</div>
        </div>
      </header>
    </div>
  );
}

export default MePage;
