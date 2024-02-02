import React, { useState } from 'react';
import Header from '../common/Header';
import ReactTypingEffect from 'react-typing-effect';
import { Outlet, useNavigate } from 'react-router-dom';
import NewSearchbar from '../common/newSearchbar';
import GoButton from '../common/GoButton';

const Home = () => {
  const navigate = useNavigate();

  const handleTransition = () => {
    navigate('/activities');
  };

  return (
    <div className="flex flex-col h-screen bg-myWhite">
      <div className="w-full">
        <Header />
      </div>
      <div className="flex flex-col justify-center flex-grow">
        <div className="text-4xl flex flex-row items-center justify-center space-x-4">
          <span
            id="top-text-box"
            className={`transition-opacity duration-1000 ease-out`}
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
        </div>
        <div id="searchbars" className="flex flex-row space-x-4 p-8 justify-center items-center text-lg">
          <GoButton onClick={handleTransition} />
        </div>
        <Outlet searchbarWidth='1084px' />
      </div>
    </div>
  );
};

export default Home;
