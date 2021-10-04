import React, { useEffect, useState } from 'react';
import { Button,  Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Courses from '../Show/Courses';
import './Home.css';

const Home = () => {
    const [services ,setServices] = useState([])
    useEffect(() => {
        fetch('./fakeService4.Json')
            .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='home'>
            <Banner></Banner>
            <Container className='p-5'>
                <h2 className='pb-3'>Our Most Popular Courses</h2>
                <Row lg={3} className='g-4 '>
                {
                    services.map(service => <Courses key={service.id}
                    service ={service}></Courses>)
                }
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col className='left'>
                        <h1 className='mb-4'>Discover the secret of learning with passion !</h1>
                        <p className='mb-4'>The learning styles of 184 physiotherapy students were determined using the Grasha-Riechmann Student Learning Style Scales. Cumulative grade point average was accepted as a measure of academic performance.....</p>
                        <Button variant='primary'>Make an appointment</Button>
                    </Col>
                    <Col className='right'>
                        <h1>Looking for consultation or learning assistance ?</h1>
                        <p>We have the best teacher to help you learn and make your learning fun. Learning helps you evolve into a better human.so Learning should be effective but at times we cannot make our learning effective ...</p>
                    
                        <Form className='form-fill'>
                            <Row lg={2} md={2}>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant=" " className="drop-button">Select
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu variant="">
                                        <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-white">We'll never share your email with anyone else.</Form.Text>
                                </Form.Group>
                                <div>
                                <Form.Group className="" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                </div>
                                <Button variant="success" className='submit' type="submit"> Submit</Button>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;