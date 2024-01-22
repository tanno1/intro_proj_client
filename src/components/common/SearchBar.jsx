import React, { useState } from 'react';

const SearchBar = ({ placeholder }) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic, e.g., send data to a server
    console.log(`Submitted: ${inputText}`);
  };

  const minInputWidth = 25; // Adjust the minimum width as needed
  const inputStyle = {
    width: `${Math.max(inputText.length * 10, minInputWidth)}px`,
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
