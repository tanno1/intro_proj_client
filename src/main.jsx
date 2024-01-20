import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from "./views/Root";
import './App.css'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//   },
// ]);

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
        </Routes>
      </Router>
    </React.StrictMode>
)