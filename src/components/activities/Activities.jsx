import React, { useState } from 'react';
import NewSearchbar from '../common/newSearchbar';
import TagButton from '../common/TagButton';

const Activities = ({ searchbarWidth }) => {

    console.log("Searchbar Width:", searchbarWidth);

    const handleFormSubmit = () => {
        // Handle form submission
    };

    const tagList = [
        'Adventure',
        'Nature',
        'Travel',
        'Food',
        'Photography',
        'Culture',
        'History',
        'Outdoor',
        'Exploration',
        'Hiking',
        'Beach',
        'City',
        'Mountains',
        'Art',
        'Architecture'
      ];
      
    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagClick = (tag, isSelected) => {
        if (isSelected) {
            setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    return (
        <div id="main-activities-box" className="flex flex-col h-screen items-center bg-myWhite">
            <div id="searchbar" className="mt-8 mx-auto" style={{ width: searchbarWidth }}>
                <NewSearchbar placeholder={'What interests you?'} onSubmit={handleFormSubmit} />
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
