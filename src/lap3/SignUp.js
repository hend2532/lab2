import { Component } from "react";
import React from "react";
import Login from "./Login";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      RPassword: "",
      close: false ,
    };
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.myRef.current.focus();
  }
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleRepeat = (e) => {
    this.setState({
      RPassword: e.target.value,
    });
  };
  handleClose = (e) => {
    e.preventDefault();
    this.setState({
      close: !this.state.close,
    });
  };
  render() {
    return (
      <>
        {!this.state.close  ? (
          <div className="login">
            <h1>Sign Up</h1>
            <form>
              <label>Name : </label>
              <input
                ref={this.myRef}
                type="text"
                placeholder="Name..."
                value={this.state.name}
                onChange={this.handleName}
              />
              <label>Password : </label>
              <input
                type="password"
                placeholder="password!@#$..."
                value={this.state.password}
                onChange={this.handlePassword}
              />
              <label>Repeat Password : </label>
              <input
                type="password"
                placeholder="password!@#$..."
                value={this.state.RPassword}
                onChange={this.handleRepeat}
              />
              <button onClick={this.handleClose} className="btn">
                login
              </button>
            </form>
          </div>
        ) : (
          <Login />
        )}
      </>
    );
  }
}
export default SignUp;
