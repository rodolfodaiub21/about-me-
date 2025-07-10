import React,{useState} from "react";
import {RiArrowDropDownLine} from "react-icons/ri"
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [isMenuOpen,setIsMenuOpen]= useState(false);
    const [isRotated,setIsRotated]=useState(false);
    const [isDropdownVisible,setIsDropdownvisible]= useState(false);
    function toggleRotation() {
        setIsRotated(!isRotated)
        setIsDropdownvisible(!isDropdownVisible)

    }

    function hideDropdown() {
        setIsDropdownvisible(false);
        setIsRotated(false);

    }
    let activeStyle = {
        color: "#1DBF73",
        fontWeight: "600",
    };
    const  menuItem = (
        <>
        <li>
            <NavLink
            to ="/"
            classname="hover:bg-[#F7F7F7F7] hover: text-black px-4 py-2 hover: px-4 hover:py-2 hover:rounded-sm"
            style={({isActive}) => (isActive ? activeStyle :undefined)}
            >
                About me
            </NavLink>

        </li>
        <li>
            <NavLink
            to ="/"
            classname="hover:bg-[#F7F7F7F7] hover: text-black px-4 py-2 hover: px-4 hover:py-2 hover:rounded-sm"
            style={({isActive}) => (isActive ? activeStyle :undefined)}
            >
                Hola
            </NavLink>
            
        </li>
        <li>
            <NavLink
            onClick ={toggleRotation}
            to="/"
            className= "hover:bg-[#F7F7F7F7] hover:text-black px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm flex justify-between items-center relative"
            style = {({isActive})}
            >
                
            </NavLink>
        </li>
        </>
    )
}