import React from 'react'
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <div className='NavBar'>
      
        <Link className="link" to='/'>Home</Link>
        <Link className="link" to='/contactUs'>Contact Us</Link>
        <Link className="link" to='/student'>Student Data</Link>
    
    </div>
    
  );
}
