import React, { useState } from 'react';
import ResetSearchbar from '../common/ResetSearchbar';
import TagButton from '../common/TagButton';
import NewSearchbar from '../common/newSearchbar';
import Header from '../common/Header';
import CalenderSearch from '../common/CalenderSearch';
import BudgetDropdown from '../common/BudgetDropdown';
import AccomodationsDropdown from '../common/AccomodationsDropdown';

const AddedTag = ({ tag, onRemove }) => {
    return (
        <div className="flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-blue-500 text-white cursor-pointer hover:scale-105">
            <span>{tag}</span>
            <button onClick={() => onRemove(tag)} className="ml-1">&times;</button>
        </div>
    );
};

const Activities = ({ searchbarWidth }) => {
    const [addedTags, setAddedTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [showTags, setShowTags] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');

    const tagList = [
        'Adventure',
        'Nature',
        'Food',
        'Photography',
        'Culture',
        'History',
        'Outdoor',
        'Hiking',
        'Beach',
        'City',
        'Mountains',
        'Art',
        'Architecture'
    ];

    const handleFormSubmit = (searchTerm) => {
        if (searchTerm.trim() !== '') {
            if (addedTags.length <= 8) {
                setAddedTags([...addedTags, searchTerm.trim()]);
                setSearchTerm(''); // clear form after each entry
                console.log(addedTags)
            }
        }
    };

    const handleRemoveTag = (tag) => {
        setAddedTags(addedTags.filter((addedTag) => addedTag !== tag));
    };

    return (
        <div>
            <div id="header" className='w-full'>
                <Header />
            </div>
            <div id="main-body" className='flex flex-col items-center justify-center mx-auto space-y-6 w-fit' style={{ height: "calc(100vh - 64px)" }}>
                <p className='text-3xl font-semibold'>Tell me about your trip!</p>
                <div className="input-group">
                    <p className="text-left font-semibold">Locations</p>
                    <div className='flex flex-row space-x-2 items-center'>
                        <NewSearchbar placeholder={'Here'} />
                        <p className="text-left ml-2 font-semibold">to</p>
                        <NewSearchbar placeholder={'There'} />
                    </div>
                </div>
                <div className="input-group">
                    <p className="text-left font-semibold">Dates</p>
                    <div className='flex flex-row space-x-2 items-center'>
                        <CalenderSearch placeholder={'Start Date'} />
                        <p className="text-left ml-2 font-semibold">to</p>
                        <CalenderSearch placeholder={'End Date'} />
                    </div>
                </div>
                <div className="input-group">
                    <p className="text-left font-semibold">Budget</p>
                    <BudgetDropdown placeholder={'Total ($)'} />
                </div>
                <div className="input-group">
                    <p className="text-left font-semibold">Accommodations</p>
                    <AccomodationsDropdown placeholder={'Camp, Hotel, etc.'} />
                </div>
                <div className="input-group flex flex-col justify-center items-center">
                    <div className='n'>
                        <p className="text-left font-semibold">Interests</p>
                        <ResetSearchbar
                            placeholder={'What interests you?'}
                            onSubmit={handleFormSubmit}
                            addedTags={addedTags}
                            onRemoveTag={handleRemoveTag}
                        />
                    </div>
                    <div className="flex flex-wrap mt-2" style={{ maxWidth: '100%' }}>
                        {addedTags.slice(0, 8).map((tag, index) => (
                            <div onClick={() => handleRemoveTag(tag)} key={index} className="flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-myLightPicton text-white cursor-pointer hover:scale-105 hover:bg-myPicton mr-2 mb-2">
                                <span>{tag}</span>
                                <button className="ml-1">&times;</button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Activities;
