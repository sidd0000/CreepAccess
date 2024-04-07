// Navigation.jsx (a component to render navigation links)

import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
const Navigation = () => {
  return (
    <div>
      <ul>
        <li className='List'><Link to="/signup">Sign Up</Link></li>
        <li className='List'><Link to="/login">Login</Link></li>
      </ul>
    </div>
  );
};

export default Navigation;
