import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const HomeLayout = () => {


    const newName = useContext(AuthContext)
    console.log(newName);



    return (
        <div className=''>

           <Navbar ></Navbar>
            <Outlet> </Outlet>
<Footer></Footer>
        </div>
    );
};

export default HomeLayout;