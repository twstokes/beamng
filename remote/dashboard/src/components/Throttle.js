import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";

const Wrapper = styled.div`
  padding: 2em;
  background-color: #eee;
  flex: 1 100%;
  min-width: 300px;
`;

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 100
        }
      }
    ]
  }
};

const data = value => {
  return {
    datasets: [
      {
        label: "Throttle",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [Math.round(value * 100)]
      }
    ]
  };
};

let Throttle = props => (
  <Wrapper>
    <Bar data={data(props.value)} options={options} width={25} height={25} />
  </Wrapper>
);

export default Throttle;
