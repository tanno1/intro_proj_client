import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from "./views/Root";
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)