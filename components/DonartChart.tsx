"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonartChart = ({ accounts }: DonartChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1259,3333,4566],
        backgroundColor: ["#0747b6", "#2265d8", , "#2f91fa"],
      },
    ],
    labels: ["Banks 1", "Banks 2", "Banks 3"],
  };
  return (
    <Doughnut
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
      data={data}
    />
  );
};

export default DonartChart;
