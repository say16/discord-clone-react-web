import React, { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import SelectableItem from "../../components/atoms/selectable-item";
import MainLayoutHeader from "../../components/organisms/main-layout-header";
import { TbMessageCirclePlus } from "react-icons/tb";
import { CgInbox } from "react-icons/cg";
import { BsQuestionCircleFill } from "react-icons/bs";

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
      <MainLayoutHeader title="Arkadaslar" titleIcon={<FaUserFriends />}>
        <div className="flex items-center justify-between w-full h-full">
          <div className="flex h-full">
            <div className="w-px h-full mx-4 rounded-full bg-main-white-1/10" />
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
          </div>
          <div className="flex items-center justify-end h-full gap-4">
            <div className="transition-all cursor-pointer text-color-hover">
              <TbMessageCirclePlus className="h-6 w-fit" />
            </div>
            <div className="w-px h-full rounded-full bg-main-white-1/10" />
            <div className="transition-all cursor-pointer text-color-hover">
              <CgInbox className="h-6 w-fit" />
            </div>
            <div className="transition-all cursor-pointer text-color-hover">
              <BsQuestionCircleFill className="h-6 w-fit" />
            </div>
          </div>
        </div>
      </MainLayoutHeader>
    </div>
  );
}

export default MePage;
