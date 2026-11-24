import React from 'react';

import { Outlet } from 'react-router';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from '../components/shared/footer/Footer';

const MainLayout = () => {
    return (
        <>

            <Navbar></Navbar>

            <div>
                <Outlet></Outlet>
            </div>


            <Footer></Footer>
            
        </>
    );
};

export default MainLayout;