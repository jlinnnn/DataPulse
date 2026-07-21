// ScatterPlot.jsx
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';


// ScatterPlot.jsx does not show scatter plot

//edit the code to show scatter plot when the data is recieved from DropdownMenu.jsx whcih should be passed to App.jsx


//cahnge the format of the data to be passed to ScatterPlot.jsx in which to json object includes the format


//change the format of the data to be passed to ScatterPlot.jsx in which to json object includes the format


const ScatterPlot = ({ data, width, height }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Clear existing SVG content
    svg.selectAll('*').remove();

    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.x)])
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.y)])
      .range([innerHeight, 0]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},${innerHeight + margin.top})`)
      .call(xAxis);

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .call(yAxis);

    svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => margin.left + xScale(d.x))
      .attr('cy', d => margin.top + yScale(d.y))
      .attr('r', 5)
      .attr('fill', 'steelblue');
  }, [data, width, height]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default ScatterPlot;
