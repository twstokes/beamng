import React, { Component } from "react";
import styled from "styled-components";

import Throttle from "./components/Throttle";
import Speed from "./components/Speed";
import Rpm from "./components/Rpm";
import LineGraph from "./components/Line";

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
`;

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
    if (this.state.data === null) {
      return <h2>Awaiting websocket connection...</h2>;
    }

    return (
      <Wrapper>
        <Container>
          <Throttle value={this.state.data.throttle} />
          <Rpm value={this.state.data.rpm} />
          <Speed value={this.state.data.speed} />
        </Container>
        <Container>
          <LineGraph values={this.state.data} />
        </Container>
      </Wrapper>
    );
  }
}

export default App;
