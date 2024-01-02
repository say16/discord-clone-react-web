function DirectMessageAsideHeader() {
  return (
    <div className="w-full px-2 bottom-shadow-1 h-[48px] flex items-center">
      <input
        className="w-full h-[28px] px-2 text-xs font-medium rounded bg-main-gray-1 outline-none placeholder-main-white-3 text-main-white-2"
        placeholder="Sohbet bul veya baslat "
      />
    </div>
  );
}

export default DirectMessageAsideHeader;