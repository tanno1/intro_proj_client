import React, { useState } from 'react';
import ResetSearchbar from '../common/ResetSearchbar';
import TagButton from '../common/TagButton';

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
        <div id="main-activities-box" className="flex flex-col h-screen bg-myWhite">
            <div id="searchbar" className="mt-8 mx-auto" style={{ width: searchbarWidth }}>
                <ResetSearchbar
                    placeholder={'What interests you?'} 
                    onSubmit={(searchTerm) => {
                        handleFormSubmit(searchTerm);
                        setSearchTerm(''); // clear form after each entry
                    }} 
                />
            </div>
            <div id="tags-container" className="mt-4 mx-auto flex flex-wrap gap-2" style={{ maxWidth: searchbarWidth }}>
                {addedTags.map((tag, index) => (
                    <AddedTag key={index} tag={tag} onRemove={handleRemoveTag} />
                ))}
            </div>
            <div id="suggested-tags" className="mt-4 mx-auto pb-16" style={{ width: searchbarWidth }}>
                <div className="flex flex-wrap gap-2">
                    {tagList.map((tag, index) => (
                        <TagButton
                            key={index}
                            label={tag}
                            selected={selectedTags.includes(tag)}
                            onClick={handleTagClick}
                        />
                    ))}
                </div>
            </div>
            <div id="map-placeholder" className="mt-4 mx-auto flex justify-center items-center" style={{ width: searchbarWidth, height: '400px', borderRadius: '10px', backgroundColor: '#6fd6ff' }}>
                <span className='font-semibold italic'>MAP PLACEHOLDER</span>
            </div>
        </div>
    );
};

export default Activities;
