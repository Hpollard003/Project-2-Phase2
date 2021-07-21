import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav justify-content-center">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/about"> About Page</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/posts"> New Posts</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/oldposts"> Old Posts</NavLink>
        </li>
      </ul>



    </div>

  )
}

export default NavBar
