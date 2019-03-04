import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
        <img className="home-img" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      <div>
        <ul className="home-ul">
          <Link to="/">
            <img className="home-logo" src="https://icons-for-free.com/free-icons/png/512/112764.png" alt="Etymology"/>
            <h2 className="home-h1">Etymology</h2>
          </Link>
          <Link className="home-navbar" to="/login">Log In</Link>
          <Link className="home-navbar" to="/signup">Sign Up</Link>
          <Link className="home-navbar" to="/">Help</Link>
          <Link className="home-navbar" to="/">Download</Link>
          <Link className="home-navbar" to="/">Premium</Link>
        </ul>
      </div>
      <div className="home-centered">
        <h1>Music for everyone.</h1>
        <h4>Millions of songs. No credit card needed.</h4>
        <button src="#/signup" className="signup-login-submit btn-signup-page">Get Etymology Free</button>
      </div>
      <div className="home-footer">
       <nav>
        <div>
          <Link to="/">
            <img className="home-logo" src="https://icons-for-free.com/free-icons/png/512/112764.png" alt="Etymology"/>
            <h2 className="home-h1">Etymology</h2>
          </Link>
        </div>
        <div>Company</div>
        <div>Communities</div>
        <div>Useful Links</div>
       </nav>
      </div>
      {/* <a href="https://www.freepik.com/free-photos-vectors/background">Background psd created by ydlabs - www.freepik.com</a> */}
    </div>
  )
}

export default Home;

<Link to="/signup">Get Etymology Free</Link>