import React from "react";

function Searchbar () {
    return (
        <header className="bg-blue-300 text-black p-4 flex justify-between items-center">
            <div>
                <h1>routes.ai</h1>
            </div>
            <div>
                <p>my routes</p>
                <img src={pfp} alt="profile photo" />
            </div>
        </header>
    )
}

export default Searchbar;