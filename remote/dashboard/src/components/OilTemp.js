import React from "react"
import Gauge from "react-svg-gauge"
import GaugeWrapper from "./GaugeWrapper"

const toF = c => {
  return c * 9 / 5 + 32
}

let OilTemp = props => (
  <GaugeWrapper>
    <Gauge
      value={Math.round(toF(props.value))}
      max="400"
      width={400}
      height={320}
      label="Oil Temp"
    />
  </GaugeWrapper>
)

export default OilTemp
