import React from 'react';
import './Nav.css';
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav style = {styles.container}>
      <li>
        Test Nav
      </li>
    </nav>
  )
}
export default Nav

const styles= {
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
  },
}
