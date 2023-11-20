import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { month: 'Tháng 6', amount: 1000 },
    { month: 'Tháng 7', amount: 2000 },
    { month: 'Tháng 8', amount: 1500 },
    { month: 'Tháng 9', amount: 2500 },
    { month: 'Tháng 10', amount: 1800 },
    { month: 'Tháng 11', amount: 3000 },
];

const Chart = () => {
    return (
        <LineChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        </LineChart>
    );
};

export default Chart;
