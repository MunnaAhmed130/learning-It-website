import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';


const Services = () => {
    const [ services , setServices ]= useState([])
    useEffect(() => {
        fetch('/fakeCourseData.JSON')
            .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='pb-4'>
            <h1 className='pb-5 pt-4'>Our Popular Courses</h1>
            <Container>
                <Row xs={2} lg={3} md={3} className='g-4'  >
                {
                    services.map(service =><Service
                        key={service.id}
                        service={service}></Service>)}
                        </Row>
            </Container>
        </div>
    );
};

export default Services;