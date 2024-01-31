import React, { useState } from 'react';

const TagButton = ({ label, onClick, selected }) => {

    const [isSelected, setIsSelected] = useState(selected);

    const handleClick = () => {
        setIsSelected(!isSelected);
        onClick(label, !isSelected)
    };

    return (
        <div
          className={`flex items-center rounded-full px-3 py-1 text-sm font-semibold cursor-pointer ${
            isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={handleClick}
        >
          <span>{label}</span>
        </div>
      );
};

export default TagButton;
