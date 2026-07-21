import * as d3 from 'd3';

// Read the CSV file
d3.csv('/path/to/your/csv/file.csv').then(data => {
    // Process the data
    data.forEach(d => {
        // Convert string values to numbers if needed
        d.x = +d.x;
        d.y = +d.y;
    });

    // Create the scatter plot
    const svg = d3.select('body')
        .append('svg')
        .attr('width', 500)
        .attr('height', 500);

    svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', 5)
        .attr('fill', 'steelblue');
});