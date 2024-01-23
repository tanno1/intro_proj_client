import React, { useState } from 'react';

const SearchBar = ({ placeholder }) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted: ${inputText}`);
  };

  const minInputWidth = 37;
  const inputStyle = {
    width: `${Math.max(inputText.length * 10, minInputWidth)}px`,
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="border-none w-fit">
        <input
          type="text"
          placeholder={placeholder}
          value={inputText}
          onChange={handleChange}
          style={inputStyle}
          className="border-none focus:outline-none"
        />
      </form>
    </div>
  );
};

export default SearchBar;
