import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Banner.css'

const Banner = () => {
    const history = useHistory();
    const handleCourses = () => {
        history.push('/courses')
    }
    const handleAbout = () => {
        history.push('/about')
    }
    
    return (
        <div className="banner">
            <h1>Best Online Courses</h1>
            <p>We have best online courses and learning environment for you . we also have teachers that helps you understand  advance concept. Our goal is to provide service and teach real skills. </p>
            <Button className='banner-btn' variant='success' onClick={handleCourses}> Our Courses</Button>
            <Button className='banner-btn about-btn' onClick={handleAbout}> About us</Button>
        </div>
    );
};

export default Banner;