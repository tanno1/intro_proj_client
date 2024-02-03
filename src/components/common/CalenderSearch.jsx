import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalenderSearch = ({ placeholder }) => {
    const [startDate, setStardDate] = useState(null);

  return (
    <DatePicker
        selected={startDate}
        onChange={(date) => setStardDate(date)}
        dateFormat={"MM/dd/yyyy"}
        placeholderText={placeholder}
        className="w-fit p-2 outline-none rounded-xl bg-myGray"
    />
  )
}

export default CalenderSearch
