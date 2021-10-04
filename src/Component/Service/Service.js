import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { course_name, classes , course_duration , img, price, description} = props.service;
    return (
        <div className=''>
            <Card  className=''>
                <Card.Img variant="top" src={img} className='card-img'/>
                <Card.Body>
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Row className='bold'>
                        <Col className='border-end'><span>Duration :</span> <br/>{classes.duration}</Col>
                        <Col className='border-end'><span>Course:</span><br/> {course_duration}</Col>
                        <Col ><span>Class Size :</span><br/>{classes.count} </Col>
                    </Row>
                    <Row lg={2}>
                        <p className='pt-3 price'>Price: {price} $</p>
                        <Button className='buy-btn' variant="primary">Buy Now</Button>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;