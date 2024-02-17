import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Router from './Router/Router'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AuthProvider, { AuthContext } from './Provider/AuthProvider';

 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      
      <RouterProvider router={Router} />

    </AuthProvider>



  </React.StrictMode>,
)
