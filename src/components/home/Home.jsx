import React, { useState } from 'react';
import Header from '../common/Header';
import SearchBar from '../common/SearchBar';
import ReactTypingEffect from 'react-typing-effect';

const Home = () => {
  const [fromInput, setFromInput] = useState(false);
  const [toInput, setToInput] = useState(false);

  const handleFromClick = () => {
    setFromInput(true);
  };

  const handleToClick = () => {
    setToInput(true);
  };

  return (
    <div className="flex flex-col h-screen items-center bg-myLightGray">
      <div className="w-full">
        <Header />
      </div>
      <div className="flex flex-row h-full items-center space-x-4">
        <h1>I want to road trip from</h1>
        {fromInput ? (
          <SearchBar placeholder={"here"}/>
        ) : (
          <span onClick={handleFromClick} className="text-myGray">
            <ReactTypingEffect text={['seattle', 'chicago', 'new york city', 'portland']} eraseDelay={5000} typingDelay={1000} />
          </span>
        )}
        <h1>to</h1>
        {toInput ? (
          <SearchBar placeholder={"there"}/>
        ) : (
          <span onClick={handleToClick} className="text-myGray">
            <ReactTypingEffect text={['atlanta', 'houston', 'san francisco', 'san diego']} eraseDelay={5000} typingDelay={1000} />
          </span>
        )}
      </div>
    </div>
  );
};

export default Home;
