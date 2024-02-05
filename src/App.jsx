import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ErrorPage from './components/common/Errorpage';
import Activities from './components/activities/Activities';
import Search from './components/search/Search';
import MyRoutes from './components/myRoutes/MyRoutes';
import { TripContextProvider } from './context/tripcontext/tripContextProvider';

const App = () => {
  const searchbarWidth = '550px'; // calculated from home

  return (
    <TripContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="activities" element={<Activities searchbarWidth={searchbarWidth} />} />
          <Route path='search' element={<Search />} />
          <Route path='my-routes' element={<MyRoutes />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </TripContextProvider>
  );
};

export default App;
