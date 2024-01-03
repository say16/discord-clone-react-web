import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import MainLayoutHeader from "../../components/organisms/main-layout-header";
import { FaHashtag } from "react-icons/fa6";
import { CgInbox } from "react-icons/cg";
import { BsQuestionCircleFill } from "react-icons/bs";
import ContentEditable from "react-contenteditable";
import { FaCirclePlus } from "react-icons/fa6";

function ChannelChatPage() {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const inputRef: MutableRefObject<HTMLInputElement> = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <MainLayoutHeader titleIcon={<FaHashtag />} title="Channel Name">
        <div className="flex justify-end h-full ml-auto w-fit">
          <div className="flex items-center justify-end h-full gap-4">
            <div className="transition-all cursor-pointer text-color-hover">
              <CgInbox className="h-6 w-fit" />
            </div>
            <div className="transition-all cursor-pointer text-color-hover">
              <BsQuestionCircleFill className="h-6 w-fit" />
            </div>
          </div>
        </div>
      </MainLayoutHeader>

      <div className="flex-1 w-full overflow-y-auto">CHAT AREA</div>

      <div className="px-4 py-6">
        <div className="flex items-start px-4 py-4 rounded-lg bg-main-gray-5">
          {/* LEFT ICONS */}
          <div className="flex items-center h-full gap-4">
            <div className="transition-all cursor-pointer text-color-hover">
              <FaCirclePlus className="h-6 w-fit" />
            </div>
          </div>
          {/* LEFT ICONS */}

          {/* INPUT AREA */}
          <div className="relative flex items-center w-full h-full px-4">
            {!content && (
              <div className="absolute z-0 flex items-center w-full h-full text-main-white-4">
                #general kanalına mesaj gönder
              </div>
            )}
            <ContentEditable
              innerRef={inputRef}
              html={content}
              onChange={handleChange}
              tagName="article"
              className="relative z-10 flex-1 w-1 overflow-x-hidden overflow-y-auto outline-none text-main-white-2 max-h-[50vh]"
            />
          </div>
          {/* INPUT AREA */}

          {/* RIGHT ICONS */}
          <div className="flex items-center h-full gap-4">
            <div className="transition-all cursor-pointer text-color-hover">
              <BsQuestionCircleFill className="h-6 w-fit" />
            </div>
            <div className="transition-all cursor-pointer text-color-hover">
              <BsQuestionCircleFill className="h-6 w-fit" />
            </div>
            <div className="transition-all cursor-pointer text-color-hover">
              <BsQuestionCircleFill className="h-6 w-fit" />
            </div>
            <div className="transition-all cursor-pointer text-color-hover">
              <BsQuestionCircleFill className="h-6 w-fit" />
            </div>
          </div>
          {/* RIGHT ICONS */}
        </div>
      </div>
    </div>
  );
}

export default ChannelChatPage;
