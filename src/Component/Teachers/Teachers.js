import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import './Teachers.css'

const Teachers = (props) => {
    console.log(props.teacher.id)
    const { name, subject, img } = props.teacher;
    return (
        <div className='teachers-section'>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                        </Card>
        </div>
    );
};

export default Teachers;