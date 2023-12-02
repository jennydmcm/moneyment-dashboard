import React, { useState, useEffect } from "react";
import BarChart from ".";

const Overview = () => {
  const [chartData, setChartData] = useState({ datasets: [] });

  useEffect(() => {
    setChartData({
      labels: ['Coffee', 'Dining Out', 'Entertainment'],
      datasets: [
        {
          label: 'Budget',
          data: [1000, 500, 600],
          backgroundColor: 'rgb(66, 148, 136)',
          borderRadius: 5,
          barThickness: 64,
        },
        {
          label: 'Spent',
          data: [500, 200, 500],
          backgroundColor: 'rgb(229, 131, 49)',
          borderRadius: 5,
          barThickness: 64,
        },
        {
          label: 'Overspent',
          data: [0, 0, 200],
          backgroundColor: 'rgb(176, 65, 33)',
          borderRadius: 5,
          barThickness: 64,
        }
      ]
    });
  }, []);

  return (
    <div>
      <BarChart chartData={chartData} />
      <AnotherComponent labels={chartData.labels} />
    </div>
  );
};

export default Overview;
