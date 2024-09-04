import { Component } from "react";
import Login from "./Login";

class SignUp extends Component{
    constructor(){
        super()
        this.state={
            name:"",
            password:"",
            date:"",
            close:0
        }
    }
    render(){
        const handleName=(e)=>{
            this.setState({
                name:e.target.value,
            })
        }
        const handlePassword=(e)=>{
            this.setState({
                password:e.target.value,
            })
        }
        const handleDate=(e)=>{
            this.setState({
                date:e.target.value,
            })
        }
        const handleClose=()=>{
            this.setState({
                close:1
            })
        }
        return(
            <>
            {this.state.close===0 ? <div className="login">
                <h1>Sign Up</h1>
                <form>
                    <label>Name : </label>
                    <input type="text" placeholder="Name..." value={this.state.name} onChange={handleName}/>
                    <label>Password : </label>
                    <input type="password" placeholder="password!@#$..." value={this.state.password} onChange={handlePassword}/>
                    <label>Date : </label>
                    <input type="date" placeholder="25/3/2024..." value={this.state.date} onChange={handleDate}/>
                    <button onClick={handleClose} className="btn">login</button>
                </form>
            </div>
             : <Login/>}
            
            </>
        )
    }
}
export default SignUp