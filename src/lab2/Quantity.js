import { Component } from "react";

class Quantity extends Component{
    constructor(){
        super()
        this.state={
            quantity:1
        }
        // this.increment=this.increment.bind(this)
    }
    render(){
        const increment=()=>{
            this.setState({
                quantity:this.state.quantity+1
                
            })
        }
        const decrement=()=>{
            if(this.state.quantity>1){
            this.setState({
                quantity:this.state.quantity-1
            })
        }
        }
        return(
            <div className="quantity">
                <button className={this.state.quantity===1 && "disable"} onClick={decrement}>-</button>
                <span>{this.state.quantity}</span>
                <button onClick={increment}>+</button>
            </div>
        )
    }
}
export default Quantity;