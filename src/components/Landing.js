import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing'>
      <div className='landing-inner'>
        <h1>Test task</h1>
        <p>Go to Color picker!</p>
        <Link to='/colorpicker' className='btn click'>
          Click
        </Link>
      </div>
    </div>
  );
};

export default Landing;
