import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ErrorPage from './components/common/Errorpage';
import Activities from './components/activities/Activities';
import Search from './components/search/Search';
import MyRoutes from './components/myRoutes/MyRoutes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="activities" element={<Activities />}>
          </Route>
        </Route>
        <Route path='search' element={<Search />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path='my-routes' element={<MyRoutes />}/>
      </Routes>
    </Router>
  );
};

export default App;