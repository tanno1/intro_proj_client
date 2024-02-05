import React, { useState }  from 'react'
import { TripContext } from './TripContext';

export const TripContextProvider = ({ children }) => {
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [budget, setBudget] = useState(null);
    const [numPeople, setNumPeople] = useState(null);
    const [accomomodation, setAccomomodation] = useState(null);
    const [addedTags, setAddedTags] = useState([]);
    const [searchTerm, setSearchTerm] = useState(null);
    const [showTagList, setShowTagList] = useState(false);
    const [error, setError] = useState(null);

    return (
        <TripContext.Provider value={{
            origin, setOrigin,
            destination, setDestination,
            startDate, setStartDate,
            endDate, setEndDate,
            budget, setBudget,
            numPeople, setNumPeople,
            accomomodation, setAccomomodation,
            addedTags, setAddedTags,
            searchTerm, setSearchTerm,
            showTagList, setShowTagList,
            error, setError
        }}>
            {children}
        </TripContext.Provider>
    )
}