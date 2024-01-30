import React from 'react';
import { useNavigate  } from "react-router-dom";

const GoButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('../activities')
    }

    return (
    <button type='submit' onClick={handleClick} className='rounded-full bg-myLightPicton hover:bg-myPicton hover:shadow-lg py-2 px-4'>
        Go
    </button>
    )
}

export default GoButton
