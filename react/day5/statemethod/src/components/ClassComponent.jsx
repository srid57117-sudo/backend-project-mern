import React, { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();

    this.state = {
      message: "Hello from Class Component",
    };

    console.log("Constructor Called");
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  changeMessage = () => {
    this.setState({
      message: "State Updated",
    });
  };

  render() {
    return (
      <div>
        <h2>Class Component</h2>

        <h3>{this.state.message}</h3>

        <button onClick={this.changeMessage}>
          Update State
        </button>
      </div>
    );
  }
}

export default ClassComponent;