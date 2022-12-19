// import React from "react";
import React, { useState, useEffect } from "react";
import "./SidebarDropdownMenu.css";
import { FaRegCircle, FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SidebarDropdownMenu = ({ route , isOpen, setIsOpen}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);
  
  return (
    <div className="dropdownElements" >
      <div className="menuItems"onClick={() => toggleMenu()}>
        <div className="icon">{<FaRegCircle />}</div> 
        <div className="textArrow">
          <div className="text">{route.name}</div>
          <FaAngleDown className="downArrow" />
        </div>
      </div>
      {isMenuOpen && route.subroutes.map((route, index) => {
        return ( 
          <NavLink to={route.path} key={index} className="dropdownMenuItems">
            <div className="icon">{<FaRegCircle />}</div>
            <div className="text">{route.name}</div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SidebarDropdownMenu;









                //   <div
                //     className="dropdownElements"
                //     onClick={() => {
                //       toggleDropdown(index);
                //     }}
                //   >
                //     <div className="menuItems" id = {index}>
                //       <div className="icon">{<FaRegCircle />}</div> 
                //       <div className="textArrow">
                //         <div className="text">{route.name}</div>
                //         <FaAngleDown className="downArrow" />
                //       </div>
                //     </div>
                //     <div
                //       className="dropdownItems"
                //       onClick={() => toggleSidebar()}
                //     >
                //       {isDropdownOpen && (
                //         <SidebarDropdownMenu route={route.subroutes}/>
                //       )}
                //     </div>
                //   </div>
