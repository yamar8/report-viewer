
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { ChartComponentProps } from '../types';

export const LineChartDisplay: React.FC<ChartComponentProps> = ({ data }) => {
  if (!data || !data.data || !data.series) {
    return <p>Chart data is not available.</p>;
  }
  
  return (
    <div style={{ width: '100%', height: 400 }} dir="ltr"> {/* Recharts works best with LTR direction for axes */}
      <ResponsiveContainer>
        <LineChart
          data={data.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey={data.xAxisKey} tick={{ fontSize: 12 }} />
          <YAxis 
            label={data.yAxisLabel ? { value: data.yAxisLabel, angle: -90, position: 'insideLeft', offset: -5, style: { textAnchor: 'middle', fontSize: 14, fill: '#666' } } : undefined} 
            tick={{ fontSize: 12 }}
            allowDecimals={true}
          />
          <Tooltip
            formatter={(value: number, name: string, props: any) => {
              const seriesDef = data.series.find(s => s.key === props.dataKey);
              return seriesDef && seriesDef.unit ? `${value} ${seriesDef.unit}` : value;
            }}
            labelStyle={{ color: '#333' }}
            itemStyle={{ color: '#555' }}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
          />
          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
          {data.series.map((line) => (
            <Line key={line.key} type="monotone" dataKey={line.key} name={line.name || line.key} stroke={line.color} strokeWidth={2} activeDot={{ r: 6 }} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
