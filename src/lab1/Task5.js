import { Component } from "react";
class ToggleButton extends Component {
  constructor() {
    super();
    this.state = { value: false };
  }
  isToggle() {
      this.setState({ value: !this.state.value });
    }
    render() {
      const {value}=this.state;
    return (
      <>
        <button onClick={() => this.isToggle()}>
          {value ? "on" : "Off"}
        </button>
      </>
    );
  }
}
export default ToggleButton;
