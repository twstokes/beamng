import React from "react"
import Gauge from "react-svg-gauge"
import GaugeWrapper from "./GaugeWrapper"

let Throttle = props => (
  <GaugeWrapper>
    <Gauge
      value={Math.round(props.value * 100)}
      max="100"
      width={400}
      height={320}
      label="Throttle"
    />
  </GaugeWrapper>
)

export default Throttle
