import { Component } from "react";
import { ContextProvider } from "./Contexts";
import ComponentTwo from "./ComponantTwo";

class ComponentOne extends Component {
  render() {
    return (
      <div className="context">
        <ContextProvider
          value={{
            name: "Hend",
            age: 21,
            track: "Frontend",
            experience: "1 years",
          }}
        >
          <h1>Component One</h1>
          <ComponentTwo />
        </ContextProvider>
      </div>
    );
  }
}
export default ComponentOne;
