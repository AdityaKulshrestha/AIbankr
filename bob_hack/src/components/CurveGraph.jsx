import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { color } from "chart.js/helpers";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function CurvedGraph() {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        data: [3200, 5090, 4525, 12000],
        backgroundColor: "transparent",
        borderColor: "#FE8538",
        pointBorderColor: "#1D2C74",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 15000,
        ticks: {
          stepSize: 1000,
          callback: (value) => value + "K",
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };
  return (
    <div className="w-2/3 h-200 rounded-lg ml-20 mt-4">
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default CurvedGraph;
