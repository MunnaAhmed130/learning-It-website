import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobeAsia, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Contact.css'


const Contact = () => {
    return (
        <div>
            <Form className='form'>
                <h2>Contact Us</h2>
            <Row lg={2}>
                <Col>
                    <Form.Group as={Row} className="" controlId="">
                        <Col sm={10} className='input'>
                        <Form.Control type="name" placeholder="First name" />
                        </Col>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group as={Row} className="" controlId="">
                        <Col sm={10} className='input'>
                        <Form.Control type="name" placeholder="Last name" />
                        </Col>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group as={Row} className="" controlId="formHorizontalEmail">
                        <Col sm={10} className='input'>
                        <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group as={Row} className="" controlId="formHorizontalPassword">
                        <Col sm={10} className='input'>
                        <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Remember me" />
                        </Col>
                    </Form.Group>
                </Col>
                </Row>
                <Button variant="success" className='submit-btn2' type="submit">
                            Submit
                        </Button>
      
            </Form>
            <div className='footer-contact'>
                <p>203, Envato Labs, Behind Alis Steet, Melbourne, Australia.</p>
                <p><FontAwesomeIcon icon={faPhone} /> 01998855115</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> contact@gmail.com</p>
                <p ><FontAwesomeIcon icon={faGlobeAsia} /> WWW.learningIT.com</p>
            </div>
        </div>
    );
};

export default Contact;