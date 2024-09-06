import { Component } from "react";
import ComponentFour from "./ComponentFour";
import { ContextConsumer } from "./Contexts";
class ComponentThree extends Component {
  render() {
    return (
      <>
        <h3>Component Three</h3>
        <ContextConsumer>
          {(value) => {
            return (
              <div className="card">
                <div>Name : {value.name}</div>
                <div>Age : {value.age}</div>
                <div>Track : {value.track}</div>
                <div>Experience : {value.experience}</div>
              </div>
            );
          }}
        </ContextConsumer>
        <ComponentFour />
      </>
    );
  }
}
export default ComponentThree;
