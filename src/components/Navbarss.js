import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbarss = () => {
    const cart = useSelector((state) => state.cart)
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Link to='/' style={{ textDecoration: 'none', color: '#000', fontSize: '25px', marginRight: '880px' }}>E-coomerce</Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">


                        <Link to='/cart' style={{ textDecoration: 'none', color: '#000', fontSize: '20px', marginRight: '10px' }} variant="outline-success" className="d-flex ml-5">Cart</Link>
                        <h4 className="ml-5">{cart.length}</h4>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbarss