import React from 'react';
import Nav from '../Navbar/Nav';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import BodyNav from '../shardcomponent/BodyNav/BodyNav';


const Root = () => {
    return (
        <div className='w-full flex '>
        <Nav></Nav>
        <div className='w-full'>
           <div className='border-b-gray-300 border-b'>
            <BodyNav></BodyNav>
           </div>
            <Outlet></Outlet>
        </div>
        </div>
    );
};

export default Root;