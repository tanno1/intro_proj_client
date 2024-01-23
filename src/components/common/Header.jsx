import React from "react";
import pfp from "./Untitled.jpg"

const Header = () => {
    return (
        <header className="bg-myLightGray text-black p-4 flex justify-between items-center border-b-2 border-myLightGray">
            <div>
                <h1 className='text-2xl'>routes.ai</h1>
            </div>
            <div className="flex items-center space-x-4">
                <p className='text-lg hover:font-semibold hover:scale-105 transition-transform duration-100 transform-origin-center'>my routes</p>
                <img src={pfp} alt="profile photo" className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-100 transform-origin-center"/>
            </div>
        </header>
    )
}

export default Header;