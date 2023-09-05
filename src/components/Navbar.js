import React from 'react';
import Home from './Home';
import List from './List';
import { NavLink } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/' element={<Home />} >Home</NavLink>
            <NavLink to='/list' element={<List />} >List</NavLink>
        </nav>
    );
};

export default Navbar;