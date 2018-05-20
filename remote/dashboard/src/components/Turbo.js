import React from "react";
import styled from "styled-components";
import Gauge from "react-svg-gauge";

const Wrapper = styled.div`
  padding: 2em;
  background-color: #eee;
  flex: 1 100%;
  min-width: 300px;
`;

let Turbo = props => (
  <Wrapper>
    <Gauge
      value={Math.round(props.value * 100)}
      max="35"
      width={400}
      height={320}
      label="Turbo"
    />
  </Wrapper>
);

export default Turbo;
