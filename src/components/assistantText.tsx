export const AssistantText = ({ message }: { message: string }) => {
  return (
    <div className="absolute assistant-text" id="assistantText">
      <div className="py-[4px]">
        <div className="">
          {/* <div className="px-24 py-8 bg-secondary rounded-t-8 text-white font-bold tracking-wider">
            CHARACTER
          </div> */}
          <div className="">
            <div className="line-clamp-4 text-dialog typography-14 font-bold">
              {message.replace(/\[([a-zA-Z]*?)\]/g, "")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
