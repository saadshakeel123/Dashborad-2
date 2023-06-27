// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { SiShopware } from 'react-icons/si';
// import { MdOutlineCancel } from 'react-icons/md';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// import { links } from '../data/dummy';
// import { useStateContext } from '../contexts/ContextProvider';
// import {FiShoppingBag} from "react-icons/fi";
// import { AiOutlineShoppingCart} from "react-icons/ai";
// import { TbBrandProducthunt } from "react-icons/tb";
// import { GiProfit } from "react-icons/gi";
// import { MdOutlineInventory2 } from "react-icons/md";
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';


// const Sidebar = () => {
//   const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

//   const handleCloseSideBar = () => {
//     if (activeMenu !== undefined && screenSize <= 900) {
//       setActiveMenu(false);
//     }
//   };

//   const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
//   const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
//   const options = [
//     'one', 'two', 'three'
//   ];
//   const defaultOption = options[0];
//   return (
//     <div className="ml-2 h-screen  md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
//       {activeMenu && (
//         <>
//           <div className="flex justify-between items-center">
//             <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
//               <SiShopware /> <span >Adexa</span>
//             </Link>

//             <TooltipComponent content="Menu" position="BottomCenter">
//               <button
//                 type="button"
//                 onClick={() => setActiveMenu(!activeMenu)}
//                 style={{ color: currentColor }}
//                 className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
//               >
//                 <MdOutlineCancel />
//               </button>
//             </TooltipComponent>
//           </div>
//           <div className="mt-10 ">

//               <div >

//                   <NavLink
//                     to="/ecommerce"
//                     key="ecommerce"
//                     onClick={handleCloseSideBar}
//                     style={({ isActive }) => ({
//                       backgroundColor: isActive ? currentColor : '',
//                     })}
//                     className={({ isActive }) => (isActive ? activeLink : normalLink)}
//                   >
//                     <FiShoppingBag />
//                     <span className="capitalize " >ecommerce</span>

//                   </NavLink>

//               </div>
//               <div >

//                   <NavLink
//                     to="/orders"
//                     key="orders"
//                     onClick={handleCloseSideBar}
//                     style={({ isActive }) => ({
//                       backgroundColor: isActive ? currentColor : '',
//                     })}
//                     className={({ isActive }) => (isActive ? activeLink : normalLink)}
//                   >
//                     <AiOutlineShoppingCart />
//                     <Dropdown options={options}  value={defaultOption} placeholder="Select an option" />

//                   </NavLink>

//               </div>
//               <div >

//                   <NavLink
//                     to="/Product"
//                     key="Product"
//                     onClick={handleCloseSideBar}
//                     style={({ isActive }) => ({
//                       backgroundColor: isActive ? currentColor : '',
//                     })}
//                     className={({ isActive }) => (isActive ? activeLink : normalLink)}
//                   >
//                     <TbBrandProducthunt/>
//                     <span className="capitalize " >Product</span>

//                   </NavLink>

//               </div>
//               <div >

//                   <NavLink
//                     to="/profit analysis"
//                     key="profit analysis"
//                     onClick={handleCloseSideBar}
//                     style={({ isActive }) => ({
//                       backgroundColor: isActive ? currentColor : '',
//                     })}
//                     className={({ isActive }) => (isActive ? activeLink : normalLink)}
//                   >
//                     <GiProfit />
//                     <span className="capitalize " >profit analysis</span>

//                   </NavLink>

//               </div>
//               <div >

//                   <NavLink
//                     to="/Inventory"
//                     key="Inventory"
//                     onClick={handleCloseSideBar}
//                     style={({ isActive }) => ({
//                       backgroundColor: isActive ? currentColor : '',
//                     })}
//                     className={({ isActive }) => (isActive ? activeLink : normalLink)}
//                   >
//                     <MdOutlineInventory2 />
//                     <span className="capitalize " >Inventory</span>

//                   </NavLink>

//               </div>

//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Sidebar;

import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
import { useStateContext } from '../contexts/ContextProvider';


// * React icons
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { BiLogIn } from "react-icons/bi";
import { MdOutlineInventory2 } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbBrandProducthunt } from "react-icons/tb";
import { SlSettings } from "react-icons/sl";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation, Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
      open: {
        x: 0,
        width: "17rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        x: -250,
        width: 0,
        transition: {
          damping: 40,
          delay: 0.15,
        },
      },
    }
    : {
      open: {
        width: "17rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        width: "4rem",
        transition: {
          damping: 40,
        },
      },
    };

  const subMenusList = [
    {
      name: "orders",
      icon: AiOutlineShoppingCart,
      menus: ["new order", "order history"],
    },
    {
      name: "product",
      icon: TbBrandProducthunt,
      menus: ["Product List", "add product", "delete product", "product detail"],
    },
    {
      name: "Inventory",
      icon: MdOutlineInventory2,
      menus: ["add inventory", " inventory detail"]

    },
    {
      name: "User",
      icon: AiOutlineUser,
      menus: ["user lists", "user profile"]
    }
  ];
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-lg  tracking-tight dark:text-white text-slate-900 m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-lg  tracking-tight dark:text-white text-slate-900 ';
  return (


    <div>
      {activeMenu && (
        <>
          <div
            onClick={() => setOpen(false)}
            className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${open ? "block" : "hidden"
              } `}
          ></div>
          <motion.div
            ref={sidebarRef}
            variants={Nav_animation}
            initial={{ x: isTabletMid ? -250 : 0 }}
            animate={open ? "open" : "closed"}
            className=" w-[17rem] fixed h-screen rounded-2xl md:overflow-hidden overflow-auto md:hover:overflow-auto sidebar dark:bg-secondary-dark-bg bg-white "
          >
            {/* <div className="flex items-center gap-2.5 font-medium  py-3   mx-3">
              <img
                src="https://img.icons8.com/color/512/firebase.png"
                width={45}
                alt=""
              />
              <Link to={"/"} className="text-xl text-cyan-400 ">Fireball</Link>
            </div> */}
            <div className="flex justify-between items-center gap-2.5 font-medium  py-3   mx-3">
              <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                <SiShopware /> <span  >Adexa</span>            </Link>

              <TooltipComponent content="Menu" position="BottomCenter">
                <button
                  type="button"
                  onClick={() => setActiveMenu(!activeMenu)}
                  style={{ color: currentColor }}
                  className="text-xl  rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                >
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>
            <div className="flex flex-col  h-full">
              <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium    md:h-[68%] h-[70%]">
                <li>
                  <NavLink to="/ecommerce"
                    key="ecommerce"
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <FiShoppingBag />
                    Ecommerce
                  </NavLink>
                </li>


                {(open || isTabletMid) && (
                  <div className="  ">
                    {subMenusList?.map((menu) => (
                      <div key={menu.name} >

                        <SubMenu data={menu} />
                      </div>
                    ))}
                  </div>
                )}
                <li>
                  <NavLink to="/analysis"
                    key="Profit analysis"
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <SlSettings />
                    Profit analysis
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login"
                    key="login"
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <BiLogIn />
                    Login
                  </NavLink>
                </li>
              </ul>

            </div>

          </motion.div>
          <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
            <MdMenu size={25} />
          </div>
        </>
      )}
    </div>


  );
};

export default Sidebar;