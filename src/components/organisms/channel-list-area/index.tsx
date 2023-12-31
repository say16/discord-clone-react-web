import React, { useState } from "react";
import ChannelListAreaHeader from "../../molecules/channel-list-area-header";
import SelectableItem from "../../atoms/selectable-item";
import ChannelListAreaSection from "../../atoms/channel-list-area-section";
import { FaCalendarDay, FaHashtag } from "react-icons/fa6";
import ChannelListSectionCollapse from "../../molecules/channel-list-section-collapse";
import { HiSpeakerWave } from "react-icons/hi2";

function ChannelListArea() {
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

  const channelsData = [
    {
      id: "0",
      type: "text",
      title: "Text Channel",
      section_id: "0",
    },
    {
      id: "1",
      type: "voice",
      title: "Voice Channel",
      section_id: "1",
    },
    {
      id: "2",
      type: "text",
      title: "Text Channel",
      section_id: "1",
    },
    {
      id: "3",
      type: "voice",
      title: "Voice Channel",
      section_id: "1",
    },
    {
      id: "4",
      type: "text",
      title: "Text Channel",
      section_id: "0",
    },
    {
      id: "5",
      type: "voice",
      title: "Voice Channel",
      section_id: "1",
    },
    {
      id: "6",
      type: "other",
      title: "Other Channel",
      section_id: "2",
    },
    {
      id: "7",
      type: "other",
      title: "Other Channel",
      section_id: "2",
    },
    {
      id: "8",
      type: "other",
      title: "Other Channel",
      section_id: "3",
    },
  ];

  const textChannels = channelsData?.filter((item) => item?.type === "text");
  const voiceChannels = channelsData?.filter((item) => item?.type === "voice");
  const otherChannels = channelsData?.filter((item) => item?.type === "other");

  const channelSectionData = [
    {
      id: "0",
      title: "TEXT CHANNELS",
      icon: <FaHashtag />,
      data: textChannels,
    },
    {
      id: "1",
      title: "VOICE CHANNELS",
      icon: <HiSpeakerWave />,
      data: voiceChannels,
    },
    {
      id: "2",
      title: "OTHER CHANNELS",
      icon: <HiSpeakerWave />,
      data: otherChannels,
    },
  ];

  return (
    <div className="w-[240px] bg-main-gray-3">
      <ChannelListAreaHeader />
      <div className="w-full h-[calc(100vh-52px)] overflow-y-auto">
        <ChannelListAreaSection>
          <SelectableItem
            leftIcon={<FaCalendarDay />}
            title={"Etkinlikler"}
            index={0}
            isSelected={selectedSingleItemName === "events"}
            onClickItem={() => onClickSingleItem("events")}
          />
          <SelectableItem
            leftIcon={<FaCalendarDay />}
            title={"Etkinlikler - 2"}
            index={1}
            isSelected={selectedSingleItemName === "events-2"}
            onClickItem={() => onClickSingleItem("events-2")}
          />
        </ChannelListAreaSection>
        <hr className="mx-2 rounded-full border-main-white-1/10" />
        {channelSectionData?.map((item, index) => {
          return (
            <ChannelListAreaSection key={index}>
              <ChannelListSectionCollapse
                selectedChannelItem={selectedChannelItem}
                onClickChannelItem={(e) => onClickChannelItem(e)}
                collapseTitle={item?.title}
                channelsIcon={item?.icon}
                channelsData={item?.data}
              />
            </ChannelListAreaSection>
          );
        })}
      </div>
    </div>
  );
}

export default ChannelListArea;
