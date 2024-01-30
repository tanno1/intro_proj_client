import React, { useState } from 'react';
import Header from '../common/Header';
import ReactTypingEffect from 'react-typing-effect';
import { useNavigate } from 'react-router-dom';
import NewSearchbar from '../common/NewSearchbar'; // Ensure correct import path
import GoButton from '../common/GoButton';

const Home = () => {
  const [fromInput, setFromInput] = useState(false);
  const [toInput, setToInput] = useState(false);
  const [form1Submitted, setForm1Submitted] = useState(false);
  const [form2Submitted, setForm2Submitted] = useState(false);
  const navigate = useNavigate();

  const handleFromClick = () => {
    setFromInput(true);
  };

  const handleFormSubmit1 = (searchTerm) => {
    console.log('Form 1 submitted with search term:', searchTerm);
    setForm1Submitted(true);
    checkIfBothFormsSubmitted();
  };

  const handleToClick = () => {
    setToInput(true);
  };

  const handleFormSubmit2 = (searchTerm) => {
    console.log('Form 2 submitted with search term:', searchTerm);
    setForm2Submitted(true);
    checkIfBothFormsSubmitted();
  };

  const checkIfBothFormsSubmitted = () => {
    if (form1Submitted && form2Submitted) {
      navigate('activities');
      console.log('ready to do activities');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-myWhite">
      <div className="w-full">
        <Header />
      </div>
      <div id="home-main-box" className="flex flex-col justify-center flex-grow">
        <div id='top-text-box' className='text-4xl flex flex-row items-center justify-center space-x-4'>
          <span>Instantly plan the most </span>
          <span className='text-myPicton'>
            <ReactTypingEffect eraseDelay={3000} typingDelay={1000} speed={75} text={['awesome', 'adventurous', 'spontaneous', 'fun', 'exciting']} />
          </span>
          <span>road trip.</span>
        </div>
        <div id='searchbars' className='flex flex-row space-x-4 p-16 justify-center items-center text-xl'>
          <NewSearchbar placeholder={'Choose starting point'} onSubmit={handleFormSubmit1} />
          <span >to</span>
          <NewSearchbar placeholder={'Destination'} onSubmit={handleFormSubmit1} />
          <GoButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
