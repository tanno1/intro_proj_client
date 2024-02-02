import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalenderSearch = () => {
    const [startDate, setStardDate] = useState(null);

  return (
    <DatePicker
        selected={startDate}
        onChange={(date) => setStardDate(date)}
        dateFormat={"MM/dd/yyyy"}
        placeholderText='placeholder'
    />
  )
}

export default CalenderSearch
