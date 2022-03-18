import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const HeroNavbar = () => {
    return (
        <>
            <Navbar expand='lg' variant='dark' className='bg-transparent w-100 ' style={{ position: 'absolute', zIndex: 1 }}>
                <Navbar.Brand href='#home'>
                    <img
                        src='/img/Vaultus-removebg-preview 1.png'
                        className='w-75 ps-5'
                        alt=''
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto fs-6 px-5'>
                        <Nav.Link className='text-dark fw-bold' href='#club'>The Club</Nav.Link>
                        <Nav.Link className='text-dark fw-bold' href='#mining'>Mining</Nav.Link>
                        <Nav.Link className='text-dark fw-bold' href='#green-bitcoin'>Green $bitcoin</Nav.Link>
                        <Nav.Link className='text-dark fw-bold' href='#benefits'>Benefits</Nav.Link>
                        <Nav.Link className='text-dark fw-bold' href='#white-papers'>White Papers</Nav.Link>
                        <Nav.Link className='text-dark fw-bold' href='#timeline'>Timeline</Nav.Link>
                        <Nav.Link
                            href='#contact'
                            className='btn btn-primary fw-bold text-white'>
                            Membership
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default HeroNavbar;