import { useState, useEffect } from "react";

import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)

export default function BarChart() {
    const [chartData, setChartData] = useState({ datasets: [] })
    const [chartOptions, setChartOptions] = useState({})


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
                    barThickness: 64
                }
            ]
        });

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
                y: { stacked: true },
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var datasetLabel =
                            data.datasets[tooltipItem.datasetIndex].label || '';
                        var value = data.datasets[tooltipItem.datasetIndex].data[
                            tooltipItem.index
                        ];
                      return datasetLabel + ': $' + value;
                    },
                  },
                },
              };

        });
    }, []);

    return (
        <Bar  options={chartOptions} data={chartData} />
    )
}