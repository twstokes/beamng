import React from "react";
import styled from "styled-components";
import Gauge from "react-svg-gauge";

const Wrapper = styled.div`
  padding: 2em;
  background-color: #eee;
  flex: 1 100%;
  min-width: 300px;
`;

const toMPH = mpers => {
  return Math.round(mpers * 2.23694);
};

let Speed = props => (
  <Wrapper>
    <Gauge
      value={toMPH(props.value)}
      max="120"
      width={400}
      height={320}
      label="MPH"
    />
  </Wrapper>
);

export default Speed;
