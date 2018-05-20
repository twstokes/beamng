import React, { Component } from "react";
import "./App.css";

import Throttle from "./components/Throttle";
import Speed from "./components/Speed";
import RPM from "./components/RPM";

class App extends Component {
  constructor(props) {
    super(props);
    this.ws = null;
    this.state = { data: null };
  }

  componentDidMount() {
    this.ws = new WebSocket("ws://127.0.0.1:5678/");

    this.ws.onmessage = function(event) {
      let j = JSON.parse(event.data);
      // console.log(j);
      this.setState({ data: j });
    }.bind(this);
  }

  componentWillUnmount() {
    this.ws.close();
  }

  render() {
    if (this.state.data === null) return null;

    return (
      <div className="App">
        <Throttle value={this.state.data.throttle} />
        <RPM value={this.state.data.rpm} />
        <Speed value={this.state.data.speed} />
      </div>
    );
  }
}

export default App;
