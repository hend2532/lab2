import { Component } from "react";
import { ContextConsumer } from "./Contexts";
class ComponentFive extends Component {
  render() {
    return (
      <>
        <h5>Component Five</h5>
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
      </>
    );
  }
}
export default ComponentFive;
