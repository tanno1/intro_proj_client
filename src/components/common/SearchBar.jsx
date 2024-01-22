import React from "react";

function Searchbar ({ param }) {
    return (
        <div className="flex items-center justify-center">
            <input type="text" className='rounded-full p-3 border border-myGray' placeholder={param} />
        </div>
    )
}

export default Searchbar;