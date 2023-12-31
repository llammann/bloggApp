import React from 'react'
import { Link } from "react-router-dom";

function UserNavbar() {
  return (
    <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/add">Add</Link>
        </li>
        <li>
        <Link to="/login">Login</Link>
        </li>
    </ul>
  )
}

export default UserNavbar