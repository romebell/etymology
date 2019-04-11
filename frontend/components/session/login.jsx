import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/playlists'));
  }

  demo() {
    this.props.login({email: "robert1@test.com", password: "password123"})
      .then(() => this.props.history.push('/playlists'));
  }

  render() {
    return(
        <div className="content">
          <div className="login">
            <section>
              <i className="fas fa-headphones fa-3x login-signup-logo"></i>
              <h1 className="login-signup-h1">Etymology</h1>
            </section>
            <hr />
            <button onClick={this.demo} className="demo-login btn-login-page">Demo Login</button>
            <br/>
              <p><span>OR</span></p>
            <form>
              <input type="text" onChange={this.handleInput("email")} placeholder="Email address" value={this.state.email}/>
              <br/>
              <input type="password" onChange={this.handleInput("password")} placeholder="Password" value={this.state.password}/>
              <br/>
              <br/>
              <button className="signup-login-submit" onClick={this.handleSubmit}>Login</button>
              <br/>
              <hr />
              <div className="signup-page">
                <h3>Don't have an account?</h3>
                <Link to="/signup"><button className="signup-submit-btn btn-login-page">Sign up for Etymology</button></Link>
              </div>
            </form>
          </div>
        </div>
    )
  }
  
}

export default Login;