import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface ChartProps {
  data: { date: string; totalCost: number }[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {

  return (
    <div className={'p-5 border-solid border-transparent border-2 rounded-2xl h-[50%] w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'}>

    <ResponsiveContainer width={'100%'} height={'100%'}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="totalCost" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
};

export default Chart;
