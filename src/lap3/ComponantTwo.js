import { Component } from "react";
import ComponentThree from "./ComponentThree";
class ComponentTwo extends Component {
  render() {
    return (
      <>
        <h2>Component Two</h2>
        <ComponentThree />
      </>
    );
  }
}
export default ComponentTwo;
