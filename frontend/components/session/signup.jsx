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
        <seciton>
          <img width="43px" height="43px" src="https://icons-for-free.com/free-icons/png/512/112764.png" alt="Etymology"/>
          <h1>Etymology</h1>
        </seciton>
        <hr />
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
          <button onClick={this.handleSubmit}>Sign Up</button>
          <br/>
        </form>
      </div>
    )
  }
}

export default Signup;