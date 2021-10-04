import React, { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';


const Courses = () => {
    const [ courses , setCourses ]= useState([])
    useEffect(() => {
        fetch('/fakeCourseData.JSON')
            .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    console.log(courses)
    return (
        <div className='pb-4'>
            <h1 className='pb-5 pt-4'>Our Popular Courses</h1>
            <Container>
            <Row xs={2} lg={3} md={3} className='g-4'  >
            {
                courses.map(course =>
                        <Course key={course.id} course={course}></Course>)}
                        </Row>
            </Container>
    
        </div>
    );
};

export default Courses;