import React from 'react';

const GoButton = ({ onClick }) => {

    return (
    <button 
        type='submit'
        onClick={onClick} 
        className='rounded-full bg-myLightPicton hover:bg-myPicton hover:shadow-lg font-semibold py-2 px-8 hover:scale-105 transition-transform duration-100 transform-origin-center cursor-pointer'
    >
        Go
    </button>
    )
}

export default GoButton
