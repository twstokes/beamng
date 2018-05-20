import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

const Wrapper = styled.div`
  padding: 2em;
  background-color: #eee;
`;

const options = {};

const data = values => {
  return {
    datasets: [
      {
        label: "Speed",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [
          {
            x: 10,
            y: 20
          },
          {
            x: 15,
            y: 10
          }
        ]
      },
      {
        label: "RPM",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [
          {
            x: 10,
            y: 2000
          },
          {
            x: 15,
            y: 1050
          }
        ]
      }
    ]
  };
};

let LineGraph = props => (
  <Wrapper>
    <Line data={data(props.values)} options={options} />
  </Wrapper>
);

export default LineGraph;
