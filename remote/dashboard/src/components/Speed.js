import React from "react"
import Gauge from "react-svg-gauge"
import GaugeWrapper from "./GaugeWrapper"

const toMPH = mpers => {
  return Math.round(mpers * 2.23694)
}

let Speed = props => (
  <GaugeWrapper>
    <Gauge
      value={toMPH(props.value)}
      max="120"
      width={400}
      height={320}
      label="MPH"
    />
  </GaugeWrapper>
)

export default Speed
