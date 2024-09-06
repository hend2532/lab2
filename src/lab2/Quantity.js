import { Component } from "react";

class Quantity extends Component{
    constructor(){
        super()
        this.state={
            quantity:1
        }
        // this.increment=this.increment.bind(this)
    }
     increment=()=>{
        this.setState({
            quantity:this.state.quantity+1
            
        })
    }
     decrement=()=>{
        if(this.state.quantity>1){
        this.setState({
            quantity:this.state.quantity-1
        })
    }
    }
    render(){
        return(
            <div className="quantity">
                <button className={this.state.quantity===1 && "disable"} onClick={this.decrement}>-</button>
                <span>{this.state.quantity}</span>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
export default Quantity;