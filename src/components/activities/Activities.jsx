import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import CalenderSearch from '../common/CalenderSearch';
import BudgetDropdown from '../common/BudgetDropdown';
import AccomodationsDropdown from '../common/AccomodationsDropdown';
import PeopleDropdown from '../common/PeopleDropdown';
import GoButton from '../common/GoButton';
import OriginSeachbar from '../common/OriginSearchbar';
import DestinationSeachbar from '../common/DestinationSearchbar';
import InterestsSearch from '../common/InterestsSearch';
import { useTripContext } from '../../context/tripcontext';

const Activities = () => {
    const { origin, destination, startDate, endDate, budget, numPeople, accomomodation, addedTags } = useTripContext();
    const navigate = useNavigate();

    const handleGo = () => {
        if (!origin || !destination || !startDate || !endDate || !budget || !numPeople || !accomomodation || addedTags.length < 1) {
            const button = document.getElementById('go-button');
            button.classList.add('animate-shake');
            setTimeout(() => {
                button.classList.remove('animate-shake');
            }, 500)

            return;
        }
        navigate('/search')
    }

    return (
        <div>
            <div id="header" className='w-full'>
                <Header />
            </div>
            <div id="main-body" className='flex flex-col items-center justify-center mx-auto space-y-6 w-fit' style={{ height: "calc(100vh - 64px)" }}>
                <p className='text-3xl font-semibold'>Tell me about your trip.</p>
                <div className="input-group">
                    <p className="text-left font-semibold">Locations</p>
                    <div className='flex flex-row space-x-2 items-center'>
                        <OriginSeachbar
                            placeholder={'Here'}
                        />
                        <p className="text-left ml-2 font-semibold">to</p>
                        <DestinationSeachbar
                            placeholder={'There'}
                        />
                    </div>
                </div>
                <div className="input-group">
                    <p className="text-left font-semibold">Dates</p>
                    <div className='flex flex-row space-x-2 items-center'>
                        <CalenderSearch />
                    </div>
                </div>
                <div className="input-group">
                    <p className="text-left font-semibold">Budget</p>
                    <BudgetDropdown />
                </div>
                <div className="input-group">
                    <p className="text-left font-semibold">Attendance</p>
                    <PeopleDropdown />
                </div>
                <div className="input-group">
                    <p className="text-left font-semibold">Accommodations</p>
                    <AccomodationsDropdown />
                </div>
                <div className="input-group">
                    <InterestsSearch />
                </div>
                <div id="go-button">
                    <GoButton onClick={handleGo} text={'Plan my trip!'} />
                </div>
            </div>
        </div>
    );
};

export default Activities;
