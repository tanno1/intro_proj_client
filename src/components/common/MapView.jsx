import React from 'react'
import SaveRouteButton from '../common/SaveRouteButton';

const MapView = () => {
  return (
    <div className='w-1/3 h-2/3  rounded-xl bg-myGray flex flex-col justify-end'>
      <div className='flex justify-center pb-4'>
        <SaveRouteButton />
      </div>
    </div>
  )
}

export default MapView
