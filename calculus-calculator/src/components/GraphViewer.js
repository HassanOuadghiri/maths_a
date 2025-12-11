import React from 'react';
import { Line } from 'react-chartjs-2';

const GraphViewer = ({ data, labels }) => {
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Function',
                data: data.functionValues,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
            {
                label: 'Derivative',
                data: data.derivativeValues,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
            },
            {
                label: 'Integral',
                data: data.integralValues,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
            },
        ],
    };

    return (
        <div className="graph-viewer">
            <h2>Graph Viewer</h2>
            <Line data={chartData} />
        </div>
    );
};

export default GraphViewer;