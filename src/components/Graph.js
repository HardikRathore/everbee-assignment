import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import Chart from "react-apexcharts";
import { graph } from "../assets/data";

const Graph = () => {
  const Growth = require("../assets/Growth.png");

  const [options, setOptions] = useState({
    options: {
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: "datetime",
        categories: graph.xaxis,
      },
    },
    series: [
      {
        name: "Sales per day",
        data: graph.yaxis,
      },
    ],
  });

  return (
    <Box
      style={{
        padding: 20,
        backgroundColor: "white",
        width: 600,
        borderRadius: 20,
        boxShadow: "15px 20px #00000005",
      }}
    >
      <Box style={{ display: "flex", direction: "row" }}>
        <img
          src={Growth}
          style={{ marginTop: 8, marginRight: 8, width: 12, height: 6 }}
        />
        <Typography variant="caption">
          <Typography
            variant="caption"
            style={{ color: "#0EB000", fontWeight: 600 }}
          >
            47%
          </Typography>{" "}
          form last week
        </Typography>
      </Box>
      <Chart
        options={options.options}
        series={options.series}
        type="area"
        width="600"
      />
    </Box>
  );
};

export default Graph;
