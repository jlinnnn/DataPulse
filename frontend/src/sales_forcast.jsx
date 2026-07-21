import React, { useState, useEffect } from 'react';
import Plotly from 'plotly.js-dist';
import { API_URL } from './config';


const SalesForecast = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/predict_sales`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ key: 'value' }), // replace with your data
        })
        .then(response => response.json())
        .then(data => setData(data))
        .catch((error) => {
            console.error('Error:', error);
        });
    }, []);

    useEffect(() => {
        if (data) {
            Plotly.newPlot('scatterplot-container1', data, { title : 'Sales Forecast' });
        }
    }, [data]);

    return <div id="scatterplot-container1"></div>;
};

export default SalesForecast;