import React, { useState } from "react";
import SelectableItem from "../selectable-item";
import ChannelListAreaSection from "../channel-list-area-section";
import { FaCalendarDay } from "react-icons/fa6";
import ChannelListAreaProfileFooter from "../../molecules/channel-list-area-profile-footer";
import { Link } from "react-router-dom";
import DirectMessageAsideHeader from "../../molecules/direct-message-aside-header";

function DirectMessageAside() {
  const [selectedSingleItemName, setSelectedSingleItemName] = useState("");
  const [selectedChannelItem, setSelectedChannelItem] = useState({});

  const onClickSingleItem = (e: any) => {
    setSelectedSingleItemName(e);
    setSelectedChannelItem({});
    console.log(e);
  };

  const onClickChannelItem = (e: any) => {
    setSelectedSingleItemName("");
    setSelectedChannelItem(e?.activeItem);
  };

  return (
    <div className="w-[240px] bg-main-gray-3 flex flex-col">
      <DirectMessageAsideHeader />
      <div className="flex-1 w-full overflow-y-auto">
        <ChannelListAreaSection>
          <Link to="/channels/@me">
            <SelectableItem
              leftIcon={<FaCalendarDay />}
              title={"Arkadaslar"}
              index={0}
              isSelected={selectedSingleItemName === "events"}
              onClickItem={() => onClickSingleItem("events")}
              mainContainerClass="!h-10 !gap-3"
            />
          </Link>
          <Link to="/store">
            <SelectableItem
              leftIcon={<FaCalendarDay />}
              title={"Magaza"}
              index={0}
              isSelected={selectedSingleItemName === "events-2"}
              onClickItem={() => onClickSingleItem("events-2")}
              mainContainerClass="!h-10 !gap-3"
            />
          </Link>
        </ChannelListAreaSection>
        {/* <hr className="mx-2 rounded-full border-main-white-1/10" /> */}
      </div>
      {/* FOOTER */}
      <ChannelListAreaProfileFooter />
      {/* FOOTER */}
    </div>
  );
}

export default DirectMessageAside;
