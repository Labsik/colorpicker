import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='not-found'>
      <h1>404 Page NotFound</h1>
      <Link to='/colorpicker' className='btn click'>
        Back to Colorpicker
      </Link>
    </div>
  );
};

export default NotFoundPage;
