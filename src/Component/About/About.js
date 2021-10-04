import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Teachers from '../Teachers/Teachers';
import './About.css'

const About = () => {
    const [ teachers , setTeachers ]= useState([])
    useEffect(() => {
        fetch('/fakeTeacherData.JSON')
            .then(res => res.json())
        .then(data => setTeachers(data))
    }, [])
    console.log(teachers)
    return (
        <div>
            <Container>
                <Row md={3} lg={4} className='g-4 pb-4 pt-4'>
                    {
                teachers.map(teacher => <Teachers teacher={teacher}
                key={teacher.id}></Teachers>)
            }
                </Row>
            </Container>
  
        </div>
    );
};

export default About;