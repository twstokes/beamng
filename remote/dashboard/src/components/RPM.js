import React from "react"
import Gauge from "react-svg-gauge"
import GaugeWrapper from "./GaugeWrapper"

let Rpm = props => (
  <GaugeWrapper>
    <Gauge
      value={Math.round(props.value)}
      max="6000"
      width={400}
      height={320}
      label="RPM"
    />
  </GaugeWrapper>
)

export default Rpm
