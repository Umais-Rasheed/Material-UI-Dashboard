import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';

const uData = [3400, 2390, 4300, 2908, 4800, 3800, 4300];
const pData = [2200, 1298, 5000, 4780, 5890, 4390, 4400];
const xLabels = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun',
];

export default function SimpleLineChart() {
  return (
    <div>
      <Typography
        color='inherit'
        sx={{ fontSize: '30px', }}
      >
        Orders
      </Typography>
      <LineChart
        minwidth={1050}
        height={350}  
        grid={{ vertical: false, horizontal: true }} 
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        series={[
          { data: pData, label: 'visit'},
          { data: uData, label: 'orders'},
        ]}
       
      />
    </div>
  );
}
