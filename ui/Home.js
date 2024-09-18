import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to OmniFusion UI</h1>
      <p>This is the home page.</p>
      <Link to="/about">Learn more about us</Link>
    </div>
  );
};

export default Home;
