// PURE COMPONENTS IN REACT JS.

import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("REGULAR/NORMAL COMPONENT RENDER");
    return <div>Regular Component {this.props.name}</div>;
  }
}

export default RegComp;