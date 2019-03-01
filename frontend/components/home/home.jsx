import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
      <h1>Etymology</h1>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
      </div>
      <div>
        <img className="home-img" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      </div>
      <a href="https://www.freepik.com/free-photos-vectors/background">Background psd created by ydlabs - www.freepik.com</a>
    </div>
  )
}

export default Home;