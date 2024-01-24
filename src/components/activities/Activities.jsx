import React, { useState } from 'react';
import SearchBar from '../common/SearchBar';
import ReactTypingEffect from 'react-typing-effect';
import { useEffect } from 'react';

const Activities = () => {
    const [fromInput, setFromInput] = useState(false);
    const [tags, setTags] = useState([]);
    const [currentInput, setCurrentInput] = useState('');

    useEffect(() => {
        console.log('Updated tags:', tags);
    }, [tags]);

    
    const handleClick = () => {
        setFromInput(true);
    }

    const handleFormSubmit = (searchTerm) => {
        if (tags.length < 10) {
            setTags(prevTags => [...prevTags, searchTerm + ',']);
        } else {
            console.log('cannot add more than 10 tags')
        }
        console.log('Activities form submitted with search tag:', searchTerm);
        setCurrentInput('');
    }

    const handleInputChange = (e) => {
        setCurrentInput(e.target.value);
    }

    return (
        <div className='w-screen flex justify-center items-center py-4 space-x-4'>
            <h1>
                I want to
            </h1>
            <div className="flex flex-row items-center space-x-2">
                {tags.map((tag, index) => (
                    <div key={index} className='text-black'>
                        {tag}
                    </div>
                ))}
                {fromInput ? ( 
                    <SearchBar 
                        id='tags'
                        onFormSubmit={handleFormSubmit}
                        onInputChange={handleInputChange}
                        value={currentInput}
                        placeholder={"do this"} 
                    />
                ) : (
                    <span onClick={handleClick}
                    className='text-myGray'>
                        <ReactTypingEffect text={['eat', 'hike', 'fish', 'swim']} eraseDelay={5000} typingDelay={1000} />
                    </span>
                )}
            </div>
        </div>
    )
}

export default Activities;