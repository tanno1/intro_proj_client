import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import ErrorPage from './components/common/Errorpage';
import Activities from './components/activities/Activities';

// Use createRoot for React 18
const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/activities",
        element: <Activities />
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);