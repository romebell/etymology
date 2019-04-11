import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home">
        <img className="home-img" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      <div>
        <ul className="home-ul">
          <Link to="/">
            <i className="fas fa-headphones fa-3x home-logo"></i>
            <h2>Etymology</h2>
          </Link>
          <Link className="home-navbar" to="/login">Log In</Link>
          <Link className="home-navbar" to="/signup">Sign Up</Link>
        </ul>
      </div>
      <div className="home-centered">
        <h1>Music for everyone.</h1>
        <h4>Millions of songs. No credit card needed.</h4>
        <Link to="/signup"><button className="signup-login-submit btn-signup-page">Get Etymology Free</button></Link>
      </div>
      <div className="home-footer">
       <nav>
       </nav>
      </div>
    </div>
  )
}

export default Home;
