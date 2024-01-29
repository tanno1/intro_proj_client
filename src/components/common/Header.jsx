import React from "react";
import pfp from "./Untitled.jpg"
import logo from "./path-48.png"
import { useNavigate  } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('../')
    }

    const handleRoutesClick = () => {
        navigate('../my-routes')
    }

    return (
        <header className="bg-myLightGray text-black p-4 flex justify-between items-center border-b-2 border-myLightGray cursor-pointer">
            <div className="flex space-x-4" onClick={handleLogoClick}>
                <h1 className='text-2xl hover:scale-110 transition-transform duration-100 transform-origin-center'>routes.ai</h1>
                <img src={logo} alt="logo" className="w-9 h-9" />
            </div>
            <div className="flex items-center space-x-4">
                <p className='text-lg hover:font-semibold hover:scale-105 transition-transform duration-100 transform-origin-center cursor-pointer' onClick={handleRoutesClick}>my routes</p>
                <img src={pfp} alt="profile photo" className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-100 transform-origin-center cursor-pointer"/>
            </div>
        </header>
    )
}

export default Header;