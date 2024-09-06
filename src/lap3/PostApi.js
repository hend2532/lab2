import axios from "axios";
import { Component } from "react";

class PostApi extends Component {
  constructor() {
    super();
    this.state = {
      postId: "",
      name: "",
      email: "",
      body: "",
    };
  }
  handleForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/comments", this.state)
      .then((res) => {
        console.log(res.data);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Post Id : </label>
        <input
          type="text"
          placeholder="number..."
          name="postId"
          value={this.state.postId}
          onChange={this.handleForm}
        />
        <label>Name : </label>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          value={this.state.name}
          onChange={this.handleForm}
        />
        <label>E-mail : </label>
        <input
          type="email"
          name="email"
          placeholder="anything@gmail.com..."
          value={this.state.email}
          onChange={this.handleForm}
        />
        <label>Body : </label>
        <textarea
          name="body"
          value={this.state.body}
          onChange={this.handleForm}
        ></textarea>
        <button className="btn" type="submit">
          Post Api
        </button>
      </form>
    );
  }
}
export default PostApi;
