import React from "react";
import { useState, use } from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData }) => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartOptions({
      plugins: {
        title: {
          display: false,
          text: 'Chart.js Bar Chart - Stacked',
        },
      },
      responsive: true,
      scales: {
        x: { stacked: true },
        y: {
          stacked: true,
          ticks: {
            callback: function (value, index, values) {
              return '$' + value;
            },
          },
        },
      },
    });
  }, []);

  return <Bar options={chartOptions} data={chartData} />;
};

export default BarChart;
