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
    const [addedTags, setAddedTags] = useState(new Set());
    const [searchTerm, setSearchTerm] = useState(null);
    const [showTagList, setShowTagList] = useState(false);
    const [error, setError] = useState(null);
    const [tagList, setTagList] = useState([
        { name: 'Adventure', selected: false },
        { name: 'Nature', selected: false },
        { name: 'Food', selected: false },
        { name: 'Photography', selected: false },
        { name: 'Culture', selected: false },
        { name: 'History', selected: false },
        { name: 'Outdoor', selected: false },
        { name: 'Hiking', selected: false },
        { name: 'Beach', selected: false },
        { name: 'City', selected: false },
        { name: 'Mountains', selected: false },
        { name: 'Art', selected: false },
        { name: 'Architecture', selected: false }
    ]);

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
            error, setError,
            tagList, setTagList
        }}>
            {children}
        </TripContext.Provider>
    )
}