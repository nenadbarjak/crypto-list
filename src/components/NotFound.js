import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (  
        <div>
            <h1>404 - Page not found</h1>
            <h2>
                <Link to="/">Go to Home Page</Link>
            </h2>
        </div>
    );
}
 
export default NotFound;