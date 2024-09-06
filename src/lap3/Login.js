import { Component } from "react";
import React from "react";
import SignUp from "./SignUp"
class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      close: false,
      data:false,
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

  handleClose = (e) => {
    e.preventDefault();
    this.setState({
      close: !this.state.close,
    });
  };
  handleData = (e) => {
    e.preventDefault();
    this.setState({
      data:!this.state.data
    });
  };

  render() {
    if(this.state.data ){
     return (
      <div className="post">
      <div>Name : {this.state.name}</div>
      {/* <div>this.state.password</div> */}
      <div>Date : {new Date().toLocaleString()}</div>
      </div>
     )
    } 
    return (
      <>
       {!this.state.close ? (
          <div className="login">
            <h1>Login</h1>
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
              <div className="btns">
                <button className="btn" onClick={this.handleClose}>Sign Up</button>
              <button onClick={this.handleData} className="btn">
                Send
              </button>
              </div>
            </form>
          </div>
        ) : (
          <SignUp />
        )}
      </>
    );
  }
}
export default Login;
