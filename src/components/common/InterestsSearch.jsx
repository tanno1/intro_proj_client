import React, { useState, useEffect } from 'react';
import ResetSearchbar from '../common/ResetSearchbar';
import { useTripContext } from '../../context/tripcontext';

const InterestsSearch = () => {
    const { addedTags, setAddedTags, showTagList, setShowTagList, tagList, setTagList} = useTripContext();
    const [searchTerm, setSearchTerm] = useState('');
    
    useEffect(() => {
        console.log('tags', addedTags)
    }, [addedTags])

    const handleFormSubmit = (searchTerm) => {
        if (searchTerm && searchTerm.trim() !== '') {
            const selectedTagCount = tagList.filter(tag => tag.selected).length;
            if (selectedTagCount < 8) {
                const trimmedSearchTerm = searchTerm.trim();
                if (!addedTags.has(trimmedSearchTerm)) {
                    setAddedTags(prevTags => new Set([...prevTags, trimmedSearchTerm]));
                }
                setSearchTerm(''); // clear form after each entry
            }
        }
    };

    const handleTagClick = (tagName) => {
        if (!addedTags.has(tagName)) {
            handleFormSubmit(tagName);
        }
    };

    const handleRemoveTag = (tag) => {
        const updatedTags = new Set(addedTags);
        updatedTags.delete(tag);
        setAddedTags(updatedTags);

        setTagList(prevTagList => prevTagList.map(tagItem => {
            if (tagItem.name === searchTerm.trim()) {
                return { ...tagItem, selected: false };
            }
            return tagItem;
        }));
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col">
                <p className="text-left font-semibold mr-4">Interests</p>
                <ResetSearchbar
                    placeholder={'Activity interests?'}
                    onSubmit={handleFormSubmit}
                    addedTags={addedTags}
                    onRemoveTag={handleRemoveTag}
                    onFocus={() => setShowTagList(true)}
                />
            </div>
            <div className="flex flex-wrap mt-4 justify-center">
                {[...addedTags].map((tag, index) => (
                    <div
                        key={index}
                        className={`flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-blue-500 text-white cursor-pointer hover:scale-105 hover:bg-blue-600 mr-2 mb-2`}
                        onClick={() => handleRemoveTag(tag)}
                    >
                        <span>{tag} &times;</span>
                    </div>
                ))}
            </div>
            {showTagList && ( // Conditionally render the tag list
                <div className="flex flex-wrap mt-2 justify-center" style={{ maxWidth: '40%' }}>
                    {tagList.map((tag, index) => (
                        <div
                            key={index}
                            onClick={() => handleTagClick(tag.name)}
                            className={`rounded-full px-3 py-1 text-sm font-semibold ${tag.selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                } cursor-pointer hover:scale-105 hover:bg-blue-600 mr-2 mb-2`}
                        >
                            <span>{tag.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default InterestsSearch;
