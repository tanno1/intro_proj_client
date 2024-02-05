import React, { useState, useEffect } from 'react';
import { enGB } from 'date-fns/locale';
import { DateRangePicker, START_DATE, END_DATE } from '@bjarkehs/react-nice-dates';
import '@bjarkehs/react-nice-dates/build/style.css';
import arrow from '../common/arrow-50.png';
import { useTripContext } from '../../context/tripcontext';

const CalenderSearch = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useTripContext();

  useEffect(() => {
    console.log('startDate', startDate);
    console.log('endDate', endDate);
  }, [startDate, endDate]);

  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      minimumDate={new Date()}
      minimumLength={1}
      format='dd MMM yyyy'
      locale={enGB}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => (
        <div className='date-range flex flex-row items-center'>
          <input
            className={'input p-2 outline-none rounded-xl bg-myGray flex-grow' + (focus === START_DATE ? ' -focused' : '')}
            {...startDateInputProps}
            placeholder='Start date'
          />
          <img src={arrow} className='h-5 ml-2 mr-2' />
          <input
            className={'input p-2 outline-none rounded-xl bg-myGray flex-grow' + (focus === END_DATE ? ' -focused' : '')}
            {...endDateInputProps}
            placeholder='End date'
          />
        </div>
      )}
    </DateRangePicker>
  );
};

export default CalenderSearch;