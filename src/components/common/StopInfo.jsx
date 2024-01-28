import React from 'react';
import RemoveButton from './RemoveButton';

const StopInfo = () => {
  return (
    <div id='box' className='w-1/5 h-2/3 rounded-xl bg-myGray flex flex-col justify-between'>
        <div id='boxContents'>
            <header className='w-full h-12 flex justify-center items-center rounded-b-xl'>
                <span id='locationTitle' className='text-2xl'>
                Stop Name
                </span>
            </header>
            <div className="p-4">
                <div id='descriptionBox' className='mb-4'>
                <h2 className='text-lg font-semibold mb-2'>Description</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo sunt ducimus delectus.</p>
                </div>
                <div id='locationBox' className='mb-4'>
                <h2 className='text-lg font-semibold mb-2'>Location</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, amet.</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center pb-4'>
            <RemoveButton />
        </div>
    </div>
  );
};

export default StopInfo;
