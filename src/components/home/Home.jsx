import React, { useState } from 'react';
import Header from '../common/Header';
import SearchBar from '../common/SearchBar';
import ReactTypingEffect from 'react-typing-effect';
import { NavLink, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const [fromInput, setFromInput] = useState(false);
  const [toInput, setToInput] = useState(false);
  const [form1Submitted, setForm1Submitted]= useState(false);
  const [form2Submitted, setForm2Submitted]= useState(false);
  const navigate = useNavigate();

  const handleFromClick = () => {
    setFromInput(true);
  };
  const handleFormSubmit1 = (searchTerm) => {
    console.log('Form 1 submitted with search term:', searchTerm);
    setForm1Submitted(true)
    checkIfBothFormsSubmitted();
  }

  const handleToClick = () => {
    setToInput(true);
  };
  const handleFormSubmit2 = (searchTerm) => {
    console.log('Form 2 submitted with search term:', searchTerm);
    setForm2Submitted(true);
    checkIfBothFormsSubmitted();
  }

  const checkIfBothFormsSubmitted = () => {
    if (form1Submitted && form2Submitted) {
      navigate('activities')
      console.log('ready to do activities')
    }
  }

  return (
    <div className="flex flex-col h-screen items-center bg-myLightGray">
      <div className="w-full">
        <Header />
      </div>
      <div className="flex flex-row h-full items-center space-x-4">
        <h1>I want to road trip from</h1>
        {fromInput ? (
          <SearchBar onFormSubmit={handleFormSubmit1} placeholder={"here"}/>
        ) : (
          <span onClick={handleFromClick} className="text-myGray">
            <ReactTypingEffect text={['seattle', 'chicago', 'new york city', 'portland']} eraseDelay={5000} typingDelay={1000} />
          </span>
        )}
        <h1>to</h1>
        {toInput ? (
          <SearchBar onFormSubmit={handleFormSubmit2} placeholder={"there"}/>
        ) : (
          <span onClick={handleToClick} className="text-myGray">
            <ReactTypingEffect text={['atlanta', 'houston', 'san francisco', 'san diego']} eraseDelay={5000} typingDelay={1000} />
          </span>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
