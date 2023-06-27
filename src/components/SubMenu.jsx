import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { useStateContext } from '../contexts/ContextProvider';

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const { currentColor, activeMenu, setActiveMenu, screenSize, currentMode } = useStateContext();
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-lg tracking-tight dark:text-white text-slate-900';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-lg tracking-tight dark:text-white text-slate-900 ';
  const droplink = 'flex items-center gap-5 pl-3 pt-2 pb-2 mt-1 rounded-lg  text-lg  tracking-tight dark:text-white text-slate-900    text-lg';
  const dropLink = 'flex items-center gap-5 pl-3 pt-2 pb-2 mt-1 rounded-lg text-lg tracking-tight dark:text-white text-slate-900 ';
  return (

    <>
      <li
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <div className="flex items-center gap-5 pl-4 pt-3 pb-2.5  tracking-tight dark:text-white text-slate-900  text-lg" >
            
          <data.icon />
          <p className="flex-1 capitalize ml-3 ">{data.name}</p>
          <IoIosArrowDown
            className={` ${subMenuOpen && "rotate-180"} duration-200 mr-5 `}
          />
          
        </div>
    </li >
      <motion.ul
        animate={
          subMenuOpen
            ? {
              height: "fit-content",
            }
            : {
              height: 0,
            }
        }
        className="flex flex-col h-0 pl-14 text-[0.8rem] font-normal overflow-hidden"
      >
        {data.menus?.map((menu) => (
          <li key={menu}>
            {/* className="hover:text-blue-600 hover:font-medium" */}
            <NavLink
              to={`/${data.name}/${menu}`}
              key={`/${data.name}/${menu}`}
              onClick={handleCloseSideBar}
              style={({ isActive }) => ({
                backgroundColor: isActive ? currentColor : '',
              })}
              className={({ isActive }) => (isActive ? droplink : dropLink)}
            >

              {menu}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;