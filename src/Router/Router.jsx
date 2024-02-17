import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout';
import Home from '../Components/Home/Home';

 const Router=createBrowserRouter([
    {
        path:'/',
        element:  <HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
        

        
    }
 ])
export default Router;