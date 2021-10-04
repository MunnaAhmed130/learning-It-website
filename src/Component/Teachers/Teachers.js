import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import './Teachers.css'

const Teachers = (props) => {
    console.log(props.teacher.id)
    const { name, profession, img ,description } = props.teacher;
    return (
        <div className='teachers-section'>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <h3>{name}</h3>
                    <h6>{profession}</h6>
                    <Card.Text>
                        {description}
                        </Card.Text>
                    </Card.Body>
                        </Card>
        </div>
    );
};

export default Teachers;