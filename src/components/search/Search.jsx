import React, { useState, useEffect } from 'react';
import Header from '../common/Header';
import MapView from '../common/MapView';
import StopInfo from '../common/StopInfo';

const Search = () => {
  // const [mapData, setMapData] = useState(null);

  // useEffect(() => {
  //   // Function to fetch map data from the server
  //   const fetchMapData = async () => {
  //     try {
  //         // Make the request to the server
  //         const response = await fetch('/api/map'); 
  //         // Expect the response as an image
  //         const blob = await response.blob();
  //         // Create an object URL for the blob
  //         const objectUrl = URL.createObjectURL(blob); 
  //         // Set the map data
  //         setMapData(objectUrl);
  //     } catch (error) {
  //         console.error('Error fetching map data:', error);
  //     }
  // };
  
  //   // Call the fetchMapData function
  //   fetchMapData();
  // }, []); // This effect runs once when the component mounts

  return (
    <div className="flex flex-col h-screen bg-myLightGray">
      <div className="w-full">
        <Header />
      </div>
      <div className='w-full h-full flex justify-center items-center space-x-6'>
        <StopInfo />
        <MapView />
      </div>
    </div>
  );
};

export default Search;
