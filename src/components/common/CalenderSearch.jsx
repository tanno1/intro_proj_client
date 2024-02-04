import React, { useState } from 'react'
import { enGB } from 'date-fns/locale'
import { DatePicker } from '@bjarkehs/react-nice-dates'
import '../css_styles/style.scss'

const CalenderSearch = () => {
  const [date, setDate] = useState()
  return (
    <DatePicker date={date} onDateChange={setDate} locale={enGB}>
      {({ inputProps, focused }) => (
        <input
          className={'p-2 outline-none rounded-xl bg-myGray flex-grow input' + (focused ? ' -focused' : '')}
          {...inputProps}
        />
      )}
    </DatePicker>
  )
}

export default CalenderSearch;


