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
      <div>
        <h2>Sign Up</h2>
        <form>
          <label>Username:</label>
          <input type="text" onChange={this.handleInput("username")} value={this.state.username}/>
          <label>Password:</label>
          <input type="password" onChange={this.handleInput("password")} value={this.state.password}/>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default Signup;