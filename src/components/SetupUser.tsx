import { Link } from "react-router-dom";
import { Setup } from "../icons/Setup.icon";

interface Props{
  toggle: boolean
}

export const SetupUser = ({toggle}: Props) => {
  return (
    <div className="flex flex-col gap-3 border-t border-gray-400 w-full">
      <div className="flex items-center gap-3 justify-between mt-2 mb-10 md:mb-0">
        <h2 className="p-3 font-light text-sm rounded-lg transition-colors hover:bg-white-100 flex-1">Frontend Developer</h2>
        <Link to='/setup' className={`p-3 rounded-lg  ${toggle ? 'hover:bg-white-100 transition-colors hover:scale-105' : 'absolute -right-8 -mt-6 bg-gray-700'}`}>
          <Setup className={`w-[24px] hover:rotate-45 transition-all`}/>
        </Link>
      </div>
    </div>
  );
};
