import * as React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { useAnimate, useAnimateBar, useDrawingArea } from '@mui/x-charts/hooks';
import { PiecewiseColorLegend } from '@mui/x-charts/ChartsLegend';
import { interpolateObject } from '@mui/x-charts-vendor/d3-interpolate';
import Box from '@mui/material/Box';

const salesData = [
  { category: 'Smartphones', units: 4200 },
  { category: 'Laptops', units: 3100 },
  { category: 'Smart TVs', units: 1800 },
];

export default function TopSales() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography sx={{ marginBottom: 2,textAlign:'center' }}>
        Top 3 Best-Selling Product Categories
      </Typography>
      <BarChart
        height={250}
        dataset={salesData}
        series={[
          {
            id: 'units',
            dataKey: 'units',
            stack: 'sales',
            valueFormatter: (value) => `${value} units`,
            barLabel: (v) => `${v.value} units`,
          },
        ]}
        layout="horizontal"
        xAxis={[
          {
            id: 'color',
            min: 0,
            max: 5000,
            colorMap: {
              type: 'piecewise',
              thresholds: [2000, 3500],
              colors: ['#d32f2f', '#78909c', '#1976d2'],
            },
            valueFormatter: (value) => `${value} units`,
          },
        ]}
        yAxis={[
          {
            scaleType: 'band',
            dataKey: 'category',
            width: 140,
          },
        ]}
        slots={{
          legend: PiecewiseColorLegend,
          barLabel: BarLabelAtBase,
          bar: BarShadedBackground,
        }}
        slotProps={{
          legend: {
            axisDirection: 'x',
            markType: 'square',
            labelPosition: 'inline-start',
            labelFormatter: ({ index }) => {
              if (index === 0) {
                return 'lowest seller';
              }
              if (index === 1) {
                return 'mid performer';
              }
              return 'top seller';
            },
          },
        }}
      />
    </Box>
  );
}

export function BarShadedBackground(props) {
  const {
    ownerState,
    skipAnimation,
    id,
    dataIndex,
    xOrigin,
    yOrigin,
    seriesId,
    ...other
  } = props;
  const theme = useTheme();

  const animatedProps = useAnimateBar(props);
  const { width } = useDrawingArea();
  return (
    <React.Fragment>
      <rect
        {...other}
        fill={(theme.vars || theme).palette.text.primary}
        opacity={theme.palette.mode === 'dark' ? 0.05 : 0.1}
        x={other.x}
        width={width}
      />
      <rect
        {...other}
        filter={ownerState.isHighlighted ? 'brightness(120%)' : undefined}
        opacity={ownerState.isFaded ? 0.3 : 1}
        data-highlighted={ownerState.isHighlighted || undefined}
        data-faded={ownerState.isFaded || undefined}
        {...animatedProps}
      />
    </React.Fragment>
  );
}

const Text = styled('text')(({ theme }) => ({
  ...theme?.typography?.body2,
  stroke: 'none',
  fill: (theme.vars || theme).palette.common.white,
  transition: 'opacity 0.2s ease-in, fill 0.2s ease-in',
  textAnchor: 'start',
  dominantBaseline: 'central',
  pointerEvents: 'none',
  fontWeight: 600,
}));

function BarLabelAtBase(props) {
  const {
    seriesId,
    dataIndex,
    color,
    isFaded,
    isHighlighted,
    classes,
    xOrigin,
    yOrigin,
    x,
    y,
    width,
    height,
    layout,
    skipAnimation,
    ...otherProps
  } = props;

  const animatedProps = useAnimate(
    { x: xOrigin + 8, y: y + height / 2 },
    {
      initialProps: { x: xOrigin, y: y + height / 2 },
      createInterpolator: interpolateObject,
      transformProps: (p) => p,
      applyProps: (element, p) => {
        element.setAttribute('x', p.x.toString());
        element.setAttribute('y', p.y.toString());
      },
      skip: skipAnimation,
    },
  );

  return <Text {...otherProps} {...animatedProps} />;
}