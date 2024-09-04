import { Component } from "react";
class Task4 extends Component {
  render() {
    const { fname, hour, track, leader, children } = this.props;
    return (
      <>
        <div>name: {fname}</div>
        <div>hour: {hour}</div>
        <div>leader : {leader}</div>
        <div>track : {track}</div>
        <div>children ---- {children}</div>
      </>
    );
  }
}
export default Task4;
