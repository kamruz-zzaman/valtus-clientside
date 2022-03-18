import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './admin.css'
const Admin = () => {
    // const { logout } = useAuth();
    // const { path, url } = useRouteMatch();
    const openNav = () => {
        document.getElementById('myN').style.width = '250px';
        document.getElementById('main').style.marginLeft = '250px';
        document.getElementById('para').style.textAlign = 'right';
        document.getElementById('para').style.marginRight = '10px';
        document.getElementById('myN').classList.remove('d-none');
        document.getElementById('myN').classList.add('d-block');
    };

    const closeNav = () => {
        document.getElementById('myN').style.width = '0';
        document.getElementById('main').style.marginLeft = '0';
        document.getElementById('para').style.textAlign = 'center';
    };
    return (
        <>
            <div className=''>
                <button onClick={openNav} className='buttoncColor d-block d-md-none'>
                    <img src='/img/menu.png' alt='' />
                </button>
                <div className='admnHeaderr d-none d-md-block'>
                    <p>Admin Panel</p>
                </div>
                <div className='admnHeader d-block d-md-none'>
                    <p id='para'>Admin Panel</p>
                </div>
                <div id='myNN' className='sidennaav h-100 mt-5 d-none d-md-block'>
                    <NavLink to='/home' className='mb-5 border-bottom mt-1 border-light'>
                        {/* <img width='120px' src={companyLogo} alt='' /> */}
                    </NavLink>
                    <NavLink
                        to='allCarousel'
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "black" : "",
                                backgroundColor: isActive ? "white" : "",
                                borderRadius: isActive ? "10px" : ''
                            };
                        }}
                    >
                        <span>All Carousel img</span>
                    </NavLink>
                    <NavLink
                        to='carousel'
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "black" : "",
                                backgroundColor: isActive ? "white" : "",
                                borderRadius: isActive ? "10px" : ''
                            };
                        }}
                    >
                        <span>Carousel img</span>
                    </NavLink>
                    <NavLink
                        to='userInfo'
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "black" : "",
                                backgroundColor: isActive ? "white" : "",
                                borderRadius: isActive ? "10px" : ''
                            };
                        }}
                    >
                        <span>User Info</span>
                    </NavLink>
                    <div className='pt-5'></div>
                    <div className='pt-5'></div>
                    <div className='pt-5'></div>
                    <div className='pt-5 d-flex justify-content-center'>
                        <button onClick='{logout}' className='btn btn-primary text text-mmd'>
                            LogOut
                        </button>
                    </div>
                </div>
                <div id='myN' className='sidennaav  d-none d-md-none'>
                    <div className='mt-5'></div>
                    <NavLink to='/home' className='mb-5 border-bottom border-light'>
                        {/* <img width='120px' src='{companyLogo}' alt='' /> */}
                    </NavLink>
                    <a
                        href='javascript:void(0)'
                        className='closeebttn'
                        onClick={closeNav}>
                        &times;
                    </a>
                    <NavLink
                        to='allCarousel'
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "black" : "",
                                backgroundColor: isActive ? "white" : "",
                                borderRadius: isActive ? "10px" : ''
                            };
                        }}
                        onClick={closeNav}
                    >
                        <span>All Carousel img</span>
                    </NavLink>
                    <NavLink
                        to='carousel'
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "black" : "",
                                backgroundColor: isActive ? "white" : "",
                                borderRadius: isActive ? "10px" : ''
                            };
                        }}
                        onClick={closeNav}
                    >
                        <span>Carousel img</span>
                    </NavLink>
                    <NavLink
                        to='userInfo'
                        onClick={closeNav}
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "black" : "",
                                backgroundColor: isActive ? "white" : "",
                                borderRadius: isActive ? "10px" : ''
                            };
                        }}>
                        <span>User Info</span>
                    </NavLink>
                    <div className='pt-5'></div>
                    <div className='pt-5'></div>
                    <div className='pt-5'></div>
                    <div className='pt-5 d-flex justify-content-center'>
                        <button onClick="{logout}" className='btn btn-primary text-mmd'>
                            LogOut
                        </button>
                    </div>
                </div>
                <div id='main' className='d-block d-md-none'>
                    <p className='text-center fw-bold fs-3'>Welcome to Admin Panel</p>
                    <Outlet></Outlet>
                </div>
                <div id='mainn' className='d-none d-md-block'>
                    <p className='text-center fw-bold fs-3'>Welcome to Admin Panel</p>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Admin;