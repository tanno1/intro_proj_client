import React, { useState, useEffect } from 'react';

const Search = () => {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    // Function to fetch map data from the server
    const fetchMapData = async () => {
      try {
        const response = await fetch('/api/map'); // Assuming your server exposes a '/api/map' endpoint
        const data = await response.json();
        setMapData(data);
      } catch (error) {
        console.error('Error fetching map data:', error);
      }
    };

    // Call the fetchMapData function
    fetchMapData();
  }, []); // This effect runs once when the component mounts

  return (
    <div>
      <h1>Search Component</h1>
      {mapData && (
        <div>
          {/* Render your map using the mapData */}
          <p>Map Data: {JSON.stringify(mapData)}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
