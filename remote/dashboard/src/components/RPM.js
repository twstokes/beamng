import React from "react";
import styled from "styled-components";
import Gauge from "react-svg-gauge";

const Wrapper = styled.div`
  padding: 2em;
  background-color: #eee;
  flex: 1 100%;
  min-width: 300px;
`;

let Rpm = props => (
  <Wrapper>
    <Gauge
      value={Math.round(props.value)}
      max="6000"
      width={400}
      height={320}
      label="RPM"
    />
  </Wrapper>
);

export default Rpm;
