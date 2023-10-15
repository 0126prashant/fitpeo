import React from 'react';
import { FiSearch } from "react-icons/fi";
import "../styles/navbar.css"
import { Main } from '../pages/Main';

const Navbar = () => {
  const getInitials = (name) => {
    const names = name.split(' ');
    return names.map((n) => n[0]).join('');
    //  <div style={{ display: 'block', order: 1 }}>
    //   {getInitials('Rahul gi')}
    // </div> 
  };
  return (
    <>
    <nav >
      {/* <h2 className='name'>{getInitials("Shahrukh Khan")}</h2> */}
      <h2 className='name'>Hello Shahrukh👋,</h2>
      {/* <FiSearch/> */}
      <div className="search">
        <span><FiSearch/></span>

        <input type="text" placeholder="Search" />
      </div>
      </nav>
      </>
  );
};

export default Navbar;

