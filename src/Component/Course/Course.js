import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, Col, Row } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    const element = <FontAwesomeIcon icon={faCoffee} />
    console.log(props.course)
    const { course_name, classes , course_duration , img} = props.course;
    return (
        <div className=''>
                <Card  className=''>
                    <Card.Img variant="top" src={img} className='card-img'/>
                <Card.Body>
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                        <Row>
                            <Col className='border-end'>Duration : <br/>{classes.duration}</Col>
                            <Col className='border-end'> {course_duration}</Col>
                            <Col >Class Size :{classes.count} </Col>
                    </Row>
                <Button variant="primary"> {element}Buy Now</Button>
                </Card.Body>
                </Card>

        </div>
    );
};

export default Course;