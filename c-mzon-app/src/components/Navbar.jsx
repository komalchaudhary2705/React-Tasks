import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosSave } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { LuLayoutList } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-[#1f999a] py-[6%] px-4
    flex items-center justify-between">
      {/* logo */}
      <NavLink to='/'>
        <h1>MZONE</h1>
      </NavLink>
      {/* nav menulinks */}
     <div>
      <ul className="flex gap-6">
      <li className="bg-[#f6f0f044] text-white rounded-full w-8 h-8 flex items-center justify-center"><NavLink><IoIosSave /></NavLink></li>
      <li className=" rounded-full w-7 h-7"><NavLink><IoMdNotificationsOutline /></NavLink></li>
      <li className="bg-[black] rounded-full w-7 h-7"><NavLink><MdOutlineMessage /></NavLink></li>
      <li className="bg-[black] rounded-full w-7 h-7"><NavLink><LuLayoutList /></NavLink></li>
      <li className="bg-[black] rounded-full w-7 h-7"><NavLink><FaUserCircle /></NavLink></li>
      </ul>
      <button className="bg-white px-3 py-1">Start Selling</button>
     </div>
    </nav>
  );
};

export default Navbar;
