import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/home.jpg';
import "../App.css";

const Home = () => {
  return (
    <div className="home" style={styles.container}>
      <h1 style={styles.title}>Welcome to the Theatre Booking System</h1>
      <div className="background-image" style={styles.backgroundImage}></div>
      <div style={styles.contentContainer}>
        
        <p style={styles.subtitle}>Check for available seats and book your tickets online.</p>
      </div>
      <div style={styles.links}>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/registration" style={styles.link}>Registration</Link>
      </div>
    </div>
  );
};

export default Home;

const styles = {
  container: {
    position: 'relative',
    textAlign: 'center',
    minHeight: '100vh',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    opacity: 0.8,
    zIndex: -1,
  },
  contentContainer: {
    zIndex: 1,
    position: 'relative',
    margin: '50px auto',
    maxWidth: '600px',
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
    color: 'white',
  },
  subtitle: {
    fontSize: '18px',
    color: 'white',
    marginBottom: '40px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    margin: '0 10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '18px',
  },
};