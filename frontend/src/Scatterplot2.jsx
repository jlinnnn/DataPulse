// ScatterPlot.jsx

import React from 'react';
import Plot from 'react-plotly.js';

const ScatterPlot = ({ data }) => {
  return (
    <Plot
      data={[
        {
          x: data.map(item => item.x),
          y: data.map(item => item.y),
          mode: 'markers',
          type: 'scatter',
        },
      ]}
      layout={{ width: 500, height: 400, title: 'Scatter Plot' }}
    />
  );
};

export default ScatterPlot;
