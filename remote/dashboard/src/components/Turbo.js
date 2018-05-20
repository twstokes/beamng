import React from "react"
import Gauge from "react-svg-gauge"
import GaugeWrapper from "./GaugeWrapper"

let Turbo = props => (
  <GaugeWrapper>
    <Gauge
      value={Math.round(props.value)}
      min="-4"
      max="20"
      width={400}
      height={320}
      label="Turbo"
    />
  </GaugeWrapper>
)

export default Turbo
