import React, { useState } from 'react';
import Header from '../common/Header';
import ReactTypingEffect from 'react-typing-effect';
import { Outlet, useNavigate } from 'react-router-dom';
import NewSearchbar from '../common/newSearchbar';
import GoButton from '../common/GoButton';

const Home = () => {
  const [showTopTextBox, setShowTopTextBox] = useState(true);
  const navigate = useNavigate();

  const handleFormSubmit1 = (searchTerm) => {
    console.log('Form 1 submitted with search term:', searchTerm);
  };

  const handleFormSubmit2 = (searchTerm) => {
    console.log('Form 2 submitted with search term:', searchTerm);
  };

  const handleTransition = () => {
    setShowTopTextBox(false);
    setTimeout(() => {
      navigate('/activities');
    });
  };

  return (
    <div className="flex flex-col h-screen bg-myWhite">
      <div className="w-full">
        <Header />
      </div>
      <div className="flex flex-col justify-center flex-grow">
        <div className="text-4xl flex flex-row items-center justify-center space-x-4">
          {showTopTextBox && (
            <span 
              id="top-text-box" 
              className={`transition-opacity duration-1000 ease-out ${showTopTextBox ? 'opacity-100' : 'opacity-0'}`}
            >
              Instantly plan the most{' '}
              <span className="text-myPicton">
                <ReactTypingEffect
                  eraseDelay={3000}
                  typingDelay={1000}
                  speed={75}
                  text={['awesome', 'adventurous', 'spontaneous', 'fun', 'exciting']}
                />
              </span>
              road trip.
            </span>
          )}
        </div>
        <div id="searchbars" className="flex flex-row space-x-4 p-16 justify-center items-center text-lg">
          <NewSearchbar placeholder={'Choose starting point'} onSubmit={handleFormSubmit1} />
          <span>to</span>
          <NewSearchbar placeholder={'Destination'} onSubmit={handleFormSubmit2} />
          <GoButton onClick={handleTransition} />
        </div>
        <Outlet searchbarWidth='1084px' />
      </div>
    </div>
  );
};

export default Home;
