import React from 'react';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom
import './Navbar.css'; // Importing the CSS file


const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/login" style={styles.navLink}>Login</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/signup" style={styles.navLink}>Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

// Some basic inline styles for the navbar (you can move this to a CSS file)
const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Navbar;
