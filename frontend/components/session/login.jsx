import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      // .then(() => this.props.history.push('/playlists'));
  }

  render() {
    return(
        <div className="content">
          <section>
            <img src="https://icons-for-free.com/free-icons/png/512/112764.png" alt="Etymology"/>
            <h1>Etymology</h1>
          </section>
          <hr />
          <button className="demo-login btn-login-page">Demo Login</button>
          <br/>
            <p><span>OR</span></p>
          <form>
            <input type="text" onChange={this.handleInput("username")} placeholder="Email address or username" value={this.state.email}/>
            <br/>
            <input type="password" onChange={this.handleInput("password")} placeholder="Password" value={this.state.password}/>
            <br/>
            <br/>
            <button className="signup-login-submit" onClick={this.handleSubmit}>Login</button>
            <br/>
            <hr />
            <div className="signup-page">
              <h3>Don't have an account?</h3>
              <button className="signup-submit-btn btn-login-page">Sign up for Etymology</button>
            </div>
          </form>
        </div>
    )
  }
  
}


export default Login;