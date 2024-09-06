import { Component } from "react";
import Login from "./Login";

class SignUp extends Component{
    constructor(){
        super()
        this.state={
            name:"",
            password:"",
            close:0
        }
    }
     handleName=(e)=>{
        this.setState({
            name:e.target.value,
        })
    }
     handlePassword=(e)=>{
        this.setState({
            password:e.target.value,
        })
    }
    
     handleClose=()=>{
        this.setState({
            close:1
        })
    }
    render(){
        return(
            <>
            {this.state.close===0 ? <div className="login">
                <h1>Sign Up</h1>
                <form>
                    <label>Name : </label>
                    <input type="text" placeholder="Name..." value={this.state.name} onChange={this.handleName}/>
                    <label>Password : </label>
                    <input type="password" placeholder="password!@#$..." value={this.state.password} onChange={this.handlePassword}/>
                    <button onClick={this.handleClose} className="btn">login</button>
                </form>
            </div>
             : <Login/>}
            
            </>
        )
    }
}
export default SignUp