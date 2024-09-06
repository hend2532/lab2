import axios from "axios";
import { Component } from "react";

class GetApi extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((res)=>{
            this.setState({
                data:res.data
            })
        }).catch((error)=>{
            console.log(error)
        })
    }
    render(){
        return(
            <div className="posts">
                {
                    this.state.data.map((item)=>(
                        <div className="post" key={item.id}>
                            <h2>{item.name}</h2>
                            <h4>{item.email}</h4>
                            <p>{item.body}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default GetApi