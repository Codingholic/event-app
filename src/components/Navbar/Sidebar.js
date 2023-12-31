import { useState } from "react";
import control from "./assets/control.png"
import Chart_fill from "./assets/Chart_fill.png"
import Chat from "./assets/Chat.png"
import Calendar from "./assets/Calendar.png"
import User from "./assets/User.png"
import logo from "./assets/logo.png"
import Search from "./assets/Search.png"
import Chart from "./assets/Chart.png"
import Folder from "./assets/Folder.png"
import Setting from "./assets/Setting.png"
import Home from "../Home/Home";
const Sidebar = () => {
    
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: Chart_fill },
    { title: "Inbox", src: Chat },
    { title: "Employee", src: User, gap: true },
    { title: "Schedule ", src: Calendar },
    { title: "Vehicles", src: Search },
    { title: "Bill Record", src: Chart },
    { title: "Files ", src: Folder, gap: true },
    { title: "Setting", src: Setting },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-gray-800 h-screen p-3  pt-8 relative duration-300`}
      >
        <img
           src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        alt=""/>
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            alt=""/>
          <h3
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Cas Ant Events Goa
          </h3>
        </div>
        <ul className="pt-6 nav_fix">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} alt="" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Home />
    </div>
  );
};
export default Sidebar;
