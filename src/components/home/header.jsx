import React from "react";
import profilephoto from "../home/pfp.jpg";

const Header = () => {
    return (
        <header className="fixed top-0">
            <div >
                <h1>routes.ai</h1>
            </div>
            <div >
                <div >
                    my routes
                </div>
                <img src={profilephoto} alt="profile photo" />
            </div>

        </header>
    )
}

export default Header;