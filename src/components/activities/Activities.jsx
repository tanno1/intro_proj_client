import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResetSearchbar from '../common/ResetSearchbar';
import NewSearchbar from '../common/DestinationSearchbar';
import Header from '../common/Header';
import CalenderSearch from '../common/CalenderSearch';
import BudgetDropdown from '../common/BudgetDropdown';
import AccomodationsDropdown from '../common/AccomodationsDropdown';
import PeopleDropdown from '../common/PeopleDropdown';
import GoButton from '../common/GoButton';
import { TripContext } from '../../context/tripcontext';
import OriginSeachbar from '../common/OriginSearchbar';
import DestinationSeachbar from '../common/DestinationSearchbar';

const Activities = () => {
    const [location1, setLocation1] = useState('');
    const [location2, setLocation2] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [budget, setBudget] = useState('');
    const [attendance, setAttendance] = useState('');
    const [accommodation, setAccommodation] = useState('');
    const [addedTags, setAddedTags] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showTagList, setShowTagList] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [tagList, setTagList] = useState([
        { name: 'Adventure', selected: false },
        { name: 'Nature', selected: false },
        { name: 'Food', selected: false },
        { name: 'Photography', selected: false },
        { name: 'Culture', selected: false },
        { name: 'History', selected: false },
        { name: 'Outdoor', selected: false },
        { name: 'Hiking', selected: false },
        { name: 'Beach', selected: false },
        { name: 'City', selected: false },
        { name: 'Mountains', selected: false },
        { name: 'Art', selected: false },
        { name: 'Architecture', selected: false }
    ]);

    const handleClick = () => {
        if (!location1 || !location2 || !startDate || !endDate || !budget || !attendance || !accommodation || addedTags.length < 1) {
            setError('Please fill out all fields.');
            // Implement shake animation for the unfilled fields
            return;
        }
        navigate('/search')
    }

    const handleFormSubmit = (searchTerm) => {
        if (searchTerm && searchTerm.trim() !== '') {
            const selectedTagCount = tagList.filter(tag => tag.selected).length;
            if (selectedTagCount < 8) {
                const trimmedSearchTerm = searchTerm.trim();
                if (!addedTags.includes(trimmedSearchTerm)) {
                    setAddedTags(prevTags => [...prevTags, trimmedSearchTerm]);
                }
                setSearchTerm(''); // clear form after each entry
            }
        }
    };

    const handleTagClick = (tagName) => {
        if (!addedTags.includes(tagName)) {
            handleFormSubmit(tagName);
        }
    };

    const handleRemoveTag = (tag) => {
        setAddedTags(prevTags => prevTags.filter(addedTag => addedTag !== tag));
        setTagList(prevTagList => prevTagList.map(tag => {
            if (tag.name === searchTerm.trim()) {
                return { ...tag, selected: false };
            }
            return tag;
        }));
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
                        <OriginSeachbar
                            placeholder={'Here'}
                        />
                        <p className="text-left ml-2 font-semibold">to</p>
                        <DestinationSeachbar
                            placeholder={'There'}
                        />
                    </div>
                </div>
                <div className="input-group">
                    <p className="text-left font-semibold">Dates</p>
                    <div className='flex flex-row space-x-2 items-center'>
                        <CalenderSearch />
                    </div>
                </div>
                <div className="input-group">
                    <p className="text-left font-semibold">Budget</p>
                    <BudgetDropdown
                        placeholder={'Total ($)'}
                        value={budget}
                        onChange={(value) => setBudget(value)}
                    />
                </div>
                <div className="input-group">
                    <p className="text-left font-semibold">Attendance</p>
                    <PeopleDropdown
                        placeholder={'How many people?'}
                        value={attendance}
                        onChange={(value) => setAttendance(value)}
                    />
                </div>
                <div className="input-group">
                    <p className="text-left font-semibold">Accommodations</p>
                    <AccomodationsDropdown
                        placeholder={'Camp, Hotel, etc.'}
                        value={accommodation}
                        onChange={(value) => setAccommodation(value)}
                    />
                </div>
                <div className="input-group flex flex-col justify-center items-center">
                    <div className='n'>
                        <p className="text-left font-semibold">Interests</p>
                        <ResetSearchbar
                            placeholder={'Activity interests?'}
                            onSubmit={handleFormSubmit}
                            addedTags={addedTags}
                            onRemoveTag={handleRemoveTag}
                            onFocus={() => setShowTagList(true)}
                        />
                    </div>
                    <div>
                        <div className="flex flex-wrap justify-center mt-2">
                            {addedTags.map((tag, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-blue-500 text-white cursor-pointer hover:scale-105 hover:bg-blue-600 mr-2 mb-2`}
                                    onClick={() => handleRemoveTag(tag)}
                                >
                                    <span>{tag} &times;</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {showTagList && ( // Conditionally render the tag list
                        <div className="flex flex-wrap justify-center mt-2" style={{ maxWidth: '40%' }}>
                            {tagList.map((tag, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleTagClick(tag.name)}
                                    className={`flex items-center rounded-full px-3 py-1 text-sm font-semibold ${tag.selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                        } cursor-pointer hover:scale-105 hover:bg-blue-600 mr-2 mb-2`}
                                >
                                    <span>{tag.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div id="go">
                    <GoButton onClick={handleClick} text={'Plan my trip'} />
                </div>
            </div>
        </div>
    );
};

export default Activities;
