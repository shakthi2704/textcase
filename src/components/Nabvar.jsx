import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { mainMenu } from "../data"

import { BiChevronRight, BiChevronDown, BiSearch } from "react-icons/bi"

const Navbar = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveSubMenu(null)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  const handleSubMenuClick = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index)
  }

  // Function to hide submenu when a sub-menu item is clicked
  const handleSubMenuItemClick = () => {
    setActiveSubMenu(null)
  }

  return (
    <nav className=" bg-black py-10 px-20 z-40">
      <div className="container mx-auto flex justify between items-center">
        <div className="flex items-center"></div>

        <ul className="flex space-x-4 justify-start flex-grow" ref={menuRef}>
          {mainMenu.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                to={item.link}
                className="text-white flex items-center text-lg font-semibold"
                onClick={() => handleSubMenuClick(index)}
              >
                {item.label}
                {item.subMenu && (
                  <span className="arrow-icon">
                    {activeSubMenu === index ? (
                      <BiChevronRight />
                    ) : (
                      <BiChevronDown />
                    )}
                  </span>
                )}
              </Link>
              {item.subMenu && activeSubMenu === index && (
                <ul className="absolute  space-y-2 bg-black text-white py-2 rounded-xl z-50">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="whitespace-nowrap mx-2 my-1 px-4 transition-colors hover:text-primary"
                    >
                      <Link to={subItem.slug} onClick={handleSubMenuItemClick}>
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div>
          <div className="flex items-center text-white text-base">
            <BiSearch />
            <input
              type="text"
              placeholder="Search any tools"
              className="ml-2 bg-transparent border-b border-white"
            />
            <select className="ml-2 text-gray-400 bg-black border-b border-white">
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="el">Ελληνικά</option>
              <option value="hu">Magyar</option>
              <option value="pl">Polski</option>
              <option value="pt">Português</option>
              <option value="tr">Türkçe</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
