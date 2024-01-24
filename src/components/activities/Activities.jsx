import React from 'react';
import SearchBar from '../common/SearchBar';

const Activities = () => {
    return (
        <div className='w-screen flex justify-center items-center py-4 space-x-4'>
            <h1>
                I want to
            </h1>
            <div>
                <SearchBar placeholder={'do this'}/>
            </div>
        </div>
    )
}

export default Activities;