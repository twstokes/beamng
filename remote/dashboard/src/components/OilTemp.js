import React from "react";
import styled from "styled-components";
import Gauge from "react-svg-gauge";

const Wrapper = styled.div`
  padding: 2em;
  background-color: #eee;
  flex: 1 100%;
  min-width: 300px;
`;

const toF = c => {
  return c * 9 / 5 + 32;
};

let OilTemp = props => (
  <Wrapper>
    <Gauge
      value={Math.round(toF(props.value))}
      max="400"
      width={400}
      height={320}
      label="Oil Temp"
    />
  </Wrapper>
);

export default OilTemp;
