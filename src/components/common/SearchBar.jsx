import React, { useState, useEffect } from "react";

const Searchbar= ({ intervalDuration }) => {

    const placeholderWords = ["city", "mountain", "beach", "forest"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % placeholderWords.length);
        }, intervalDuration);
    
        return () => clearInterval(intervalId);
      }, [intervalDuration, placeholderWords.length]);
    
      return (
        <div className="flex items-center justify-center">
            <input
                type="text"
                className="rounded-full p-3 border border-myGray"
                placeholder={placeholderWords[currentWordIndex]} />
        </div>
      )
}

export default Searchbar;