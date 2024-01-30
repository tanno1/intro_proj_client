import React from 'react'
import NewSearchbar from '../common/NewSearchbar'

const Activities = () => {
    
    const handleFormSubmit = () => {

    }

    return (
    <div id='main-activities-box' className='w-full flex justify-center text-lg'>
        <div id="searchbar">
            <NewSearchbar  placeholder={'What interests you?'} onSubmit={handleFormSubmit}/>
        </div>
        <div id="suggested-tags"></div>
    </div>
    )
}

export default Activities

