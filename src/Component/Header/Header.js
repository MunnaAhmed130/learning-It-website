import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

import './Header.css'

const Header = () => {
    const activeStyle = {fontWeight: "bold",
    color: "Black"
  }
    return (
        <div className='header'>
            <Container fluid>
                <Row>
                    <Col md={4} ><p className='logo'>Learning IT</p></Col>
                    <Col md={8}>
                    <NavLink to='/home' className='link' activeStyle={activeStyle}>Home</NavLink>
                <NavLink to='/about' className='link' activeStyle={activeStyle}>About</NavLink>
                <NavLink to='/services' className='link' activeStyle={activeStyle}>Services</NavLink>
                        <NavLink to='/dashboard' className='link' activeStyle={activeStyle}>Dashboard</NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;