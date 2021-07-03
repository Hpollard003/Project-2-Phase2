import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about"> About Page</NavLink>
        <NavLink to="/posts"> Recent Posts</NavLink>
      </div>
    )
}

export default NavBar
