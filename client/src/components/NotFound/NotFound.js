import React, { useState } from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
   
    return (
        <div class=" main-holder non-found-container">
                <h1 class="">Error 404</h1>
   	            <h2 class="" id="desc">The page you requested was not found.</h2>
               <Link to = "/" > <h3 class="" > Return to Homepage</h3></Link> 
        </div>
    );
};

export default NotFound;