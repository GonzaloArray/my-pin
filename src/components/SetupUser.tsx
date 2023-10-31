import { Setup } from "../icons/Setup.icon";

export const SetupUser = () => {
  return (
    <div className="flex flex-col gap-3 border-t border-gray-400 w-full">
      <div className="flex items-center gap-3 justify-between mt-2 mb-10 md:mb-0">
        <h2 className="p-3 font-light text-sm rounded-lg transition-colors hover:bg-white-100 flex-1">Frontend Developer</h2>
        <button type="button" className="p-3 hover:bg-white-100 rounded-lg transition-colors hover:scale-105">
          <Setup className="w-[24px] hover:rotate-45 transition-all"/>
        </button>
      </div>
    </div>
  );
};
