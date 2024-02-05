import React, { createContext, useContext } from 'react';

export const TripContext = createContext(null);

export const useTripContext = () => useContext(TripContext);