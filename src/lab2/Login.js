import { Component } from "react";
import Product from "./Product.js"
class Login extends Component{
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
        const handleClose=()=>{
            this.setState({
                close:1
            })
        }
        
        return(
            <>
            {this.state.close===0 ? <div className="login">
                <h1>Login</h1>
                <form>
                    <label>Name : </label>
                    <input type="text" placeholder="Name..." value={this.state.name} onChange={handleName}/>
                    <label>Password : </label>
                    <input type="password" placeholder="password!@#$..." value={this.state.password} onChange={handlePassword}/>
                    {/* <button className="btn">sign Up</button> */}
                    <button onClick={handleClose} className="btn">login</button>
                </form>
            </div>
            :
            <Product/>
            }

            
            </>
        )
    }
}
export default Login