import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { LineChart } from '@mui/x-charts/LineChart';

export default function RevenueChart() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const revenue = [9200, 9800, 8700, 11200, 10500, 12000, 12840];

  return (
    <Card
      sx={{
        mt: 3,
        p: 3,
        borderRadius: 3,
        boxShadow: 'none',
        border: '1px solid #EEE',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
        Revenue Trend
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
        Last 7 days
      </Typography>

      <LineChart
        width={600}
        height={300}
        series={[
          {
            data: revenue,
            label: 'Revenue ($)',
            area: true,
            color: '#3B6FE0',
            showMark: true,
          },
        ]}
        xAxis={[{ scaleType: 'point', data: days }]}
      />
    </Card>
  );
}