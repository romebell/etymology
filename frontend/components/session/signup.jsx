import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props)
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
    this.props.signup(this.state)
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
          <button className="demo-login">Demo Login</button>
          <br/>
            <p><span>or</span></p>
          <h3>Sign up with your email address</h3>
          <form>
            <input type="text" onChange={this.handleInput("username")} placeholder="Email" value={this.state.username}/>
            <br/>
            <input type="text" placeholder="Confirm Email"/>
            <br/>
            <input type="password" onChange={this.handleInput("password")} placeholder="Password" value={this.state.password}/>
            <br/>
            <input type="text" placeholder="What should we call you?" />
            <br/>
            <button className="sign-up" onClick={this.handleSubmit}>Sign Up</button>
            <br/>
            <p className="login">Already have an account? <a href="/login">Sign In</a></p>
          </form>
        </div>
    )
  }
}

export default Signup;