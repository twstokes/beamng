import React, { Component } from "react"
import styled from "styled-components"

import Throttle from "./components/Throttle"
import Speed from "./components/Speed"
import Rpm from "./components/Rpm"
import Fuel from "./components/Fuel"
import OilTemp from "./components/OilTemp"
import EngineTemp from "./components/EngineTemp"
import Turbo from "./components/Turbo"

const Wrapper = styled.div``

const Row = styled.div`
  display: flex;
`

class App extends Component {
  state = { data: null }

  componentDidMount() {
    this.ws = new WebSocket("ws://127.0.0.1:5678/")

    this.ws.onmessage = event => {
      let j = JSON.parse(event.data)
      this.setState({ data: j })
    }
  }

  componentWillUnmount() {
    this.ws.close()
  }

  render() {
    if (this.state.data === null) {
      return <h2>Awaiting websocket connection...</h2>
    }

    let {
      throttle,
      rpm,
      speed,
      turbo,
      fuel,
      oilTempC,
      engTempC,
    } = this.state.data

    return (
      <Wrapper>
        <Row>
          <Throttle value={throttle} />
          <Rpm value={rpm} />
          <Speed value={speed} />
        </Row>
        <Row>
          <Turbo value={turbo} />
          <Fuel value={fuel} />
          <OilTemp value={oilTempC} />
        </Row>
        <Row>
          <EngineTemp value={engTempC} />
        </Row>
      </Wrapper>
    )
  }
}

export default App
