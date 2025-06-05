import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { ChartComponentProps, LocalizedString } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../utils/localization';

export const LineChartDisplay: React.FC<ChartComponentProps> = ({ data }) => {
  const { language } = useLanguage();

  if (!data || !data.data || !data.series) {
    return <p>{t({ he: "נתוני התרשים אינם זמינים.", en: "Chart data is not available." }, language)}</p>;
  }
  
  const translatedSeries = data.series.map(s => ({
    ...s,
    name: t(s.name, language), // Translate series name for legend
  }));

  const yAxisLabelText = data.yAxisLabel ? t(data.yAxisLabel, language) : undefined;

  return (
    <div style={{ width: '100%', height: 400 }} dir="ltr"> {/* Recharts works best with LTR direction for axes */}
      <ResponsiveContainer>
        <LineChart
          data={data.data}
          margin={{
            top: 5,
            right: 30,
            left: language === 'en' && yAxisLabelText ? 30 : 20, // Adjust left margin for English Y-axis label
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey={data.xAxisKey} tick={{ fontSize: 12 }} />
          <YAxis 
            label={yAxisLabelText ? { value: yAxisLabelText, angle: -90, position: 'insideLeft', offset: language === 'en' ? 10 : -5, style: { textAnchor: 'middle', fontSize: 14, fill: '#666' } } : undefined} 
            tick={{ fontSize: 12 }}
            allowDecimals={true}
          />
          <Tooltip
            formatter={(value: number, name: string, props: any) => {
              // Find original series definition by matching the translated name or key
              const originalSeriesDef = data.series.find(s => t(s.name, language) === name || s.key === props.dataKey);
              const unit = originalSeriesDef ? t(originalSeriesDef.unit, language) : '';
              return unit ? `${value} ${unit}` : value;
            }}
            labelStyle={{ color: '#333' }}
            itemStyle={{ color: '#555' }}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
          />
          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
          {translatedSeries.map((line) => (
            <Line key={line.key} type="monotone" dataKey={line.key} name={line.name || line.key} stroke={line.color} strokeWidth={2} activeDot={{ r: 6 }} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};