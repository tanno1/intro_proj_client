import React, { useState } from 'react';
import ResetSearchbar from '../common/ResetSearchbar';
import TagButton from '../common/TagButton';
import NewSearchbar from '../common/newSearchbar';
import Header from '../common/Header';

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
    const [searchTerm, setSearchTerm] = useState('');

    const handleFormSubmit1 = (searchTerm) => {
        console.log('Form 1 submitted with search term:', searchTerm);
    };

    const handleFormSubmit2 = (searchTerm) => {
        console.log('Form 2 submitted with search term:', searchTerm);
    };

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

    const handleTagClick = (tag, isSelected) => {
        if (isSelected) {
            setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const handleFormSubmit = (searchTerm) => {
        if (searchTerm.trim() !== '') {
            setAddedTags([...addedTags, searchTerm.trim()]);
            setSearchTerm(''); // clear form after each entry
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
            <div id="main-body" className='flex flex-col items-center justify-between mx-auto space-y-6 w-fit'>
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
                        <NewSearchbar placeholder={'mm/dd/yyyy'} />
                        <p className="text-left ml-2 font-semibold">to</p>
                        <NewSearchbar placeholder={'mm/dd/yyyy'} />
                    </div>
                </div>
                <div className="input-group">
                    <p className="text-left font-semibold">Budget</p>
                    <NewSearchbar placeholder={'Total ($)'} />
                </div>
                <div className="input-group">
                    <p className="text-left font-semibold">Accommodations</p>
                    <NewSearchbar placeholder={'Camp, Hotel, etc.'} />
                </div>
                <div className="input-group">
                    <p className="text-left font-semibold">Interests</p>
                    <ResetSearchbar placeholder={'What interests you?'} />
                </div>
            </div>
        </div>
    );
};

export default Activities;
