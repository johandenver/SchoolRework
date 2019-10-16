import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {

    event.preventDefault();

    alert(`Hello, your user name is: ${this.state.username} and your password is${this.state.password}`);
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <form className="form">
        <p>Username: {this.state.username}</p>
        
        <input
          value={this.state.username}
          name="username"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Username"
        />

        <p>Password: {this.state.password}</p>
        <input
          value={this.state.password}
          name="password"
          onChange={this.handleInputChange}
          type="password"
          placeholder="Password"
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
