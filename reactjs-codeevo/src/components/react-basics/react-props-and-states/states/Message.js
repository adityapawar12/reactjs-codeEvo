// STATES IN REACT JS
import React, { Component } from "react";

export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome peter!!!",
    };
  }

  changeState() {
    this.setState({
      message: "Hey Spidey!!!",
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button
          type="button"
          onClick={() => {
            this.changeState();
          }}
        >
          Go
        </button>
      </>
    );
  }
}
