import React from 'react';
import img from '../../saedx-blog-featured-70.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            {/* <h2>page not found</h2> */}
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;