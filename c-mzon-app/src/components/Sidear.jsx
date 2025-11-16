import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { MdOutlineFeed } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
const Sidear = () => {
  return (
    <div className="w-[200px] h-full border-2 border-gray-100 rounded">
      {/* user profile */}
      <div className="text-center flex flex-col items-center pt-7 ">
        <FaUserCircle size={48} className="text-orange-500" />
        <h1 className="font-semibold my-1">Jams Bond</h1>
        <p className="text-[13px] pb-4 border-b-2 text-gray-500 border-gray-200">
          jamesbond007@gmail.com
        </p>
      </div>
      {/* menu list */}
      <ul className="pt-4 flex flex-col gap-2 font-semibold pr-5">
        <li className="pl-5 flex items-center gap-3
        bg-[#1f999a] text-white rounded-r py-2
        "> <MdOutlineAddHomeWork /> <Link>My adverts</Link> </li>
        <li className="pl-5 flex items-center py-2 hover:bg-[#1f999a] hover:text-white rounded-r"> <MdOutlineFeed /> <Link>Feedback</Link> </li>
        <li className="pl-5 flex items-center py-2 hover:bg-[#1f999a] hover:text-white rounded-r"> <FaQuestionCircle /> <Link>FAQ's</Link> </li>
        <li className="pl-5 flex items-center py-2 hover:bg-[#1f999a] hover:text-white rounded-r"> <MdOutlineSettings /> <Link>Setting</Link> </li>
        <li className="pl-5 flex items-center py-2 hover:bg-[#1f999a] hover:text-white rounded-r"> <TbLogout2 /> <Link>Logout</Link> </li>
      </ul>
    </div>
  );
};

export default Sidear;
