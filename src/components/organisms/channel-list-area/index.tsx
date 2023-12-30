import React, { useState } from "react";
import ChannelListAreaHeader from "../../molecules/channel-list-area-header";
import ChannelListAreaItem from "../../atoms/channel-list-area-item";
import ChannelListAreaSection from "../../atoms/channel-list-area-section";
import { FaCalendarDay, FaHashtag } from "react-icons/fa6";
import ChannelListSectionCollapse from "../../molecules/channel-list-section-collapse";
import { HiSpeakerWave } from "react-icons/hi2";

function ChannelListArea() {
  const [isSelectedSingleItemName, setIsSelectedSingleItemName] = useState("");
  const [isSelectedChannelItemIndex, setIsSelectedChannelItemIndex] = useState<
    number | null
  >(null);

  const onClickSingleItem = (name: string) => {
    setIsSelectedSingleItemName(name);
    setIsSelectedChannelItemIndex(null);
  };

  const onClickChannelItem = (index: number) => {
    setIsSelectedSingleItemName("");
    setIsSelectedChannelItemIndex(index);
  };

  return (
    <div className="w-[240px] bg-main-gray-3">
      <ChannelListAreaHeader />
      <ChannelListAreaSection>
        <ChannelListAreaItem
          leftIcon={<FaCalendarDay />}
          title={"Etkinlikler"}
          index={0}
          isSelected={isSelectedSingleItemName === "events"}
          onClickItem={() => onClickSingleItem("events")}
        />
        <ChannelListAreaItem
          leftIcon={<FaCalendarDay />}
          title={"Etkinlikler - 2"}
          index={1}
          isSelected={isSelectedSingleItemName === "events-2"}
          onClickItem={() => onClickSingleItem("events-2")}
        />
      </ChannelListAreaSection>
      <hr className="mx-2 rounded-full border-main-white-1/5" />
      <ChannelListAreaSection>
        <ChannelListSectionCollapse
          isSelectedChannelItemIndex={isSelectedChannelItemIndex}
          onClickChannelItem={(index) => onClickChannelItem(index)}
          collapseTitle="TEXT CHANNELS"
          channelsIcon={<FaHashtag />}
        />
      </ChannelListAreaSection>
      <ChannelListAreaSection>
        <ChannelListSectionCollapse
          isSelectedChannelItemIndex={isSelectedChannelItemIndex}
          onClickChannelItem={(index) => onClickChannelItem(index)}
          collapseTitle="VOICE CHANNELS"
          channelsIcon={<HiSpeakerWave />}
        />
      </ChannelListAreaSection>
    </div>
  );
}

export default ChannelListArea;
