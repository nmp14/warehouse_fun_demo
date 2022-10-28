import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className='homepage'>
      <div className='banner'>
        <h1 className='title slide-in'>
          Welcome to Testing Warehouse Management Systems
          <Link to='/dashboard'>To Dashboard</Link>
        </h1>
      </div>
    </div>
  );
};

export { Home };