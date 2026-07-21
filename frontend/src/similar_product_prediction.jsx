import React, { useState, useEffect } from "react";
import "./similar_product_prediction.css";
import productData from "./similar_product_data.json";
import Plotly from "plotly.js-dist";
import './App.css';
import { API_URL } from './config';

const SimilarProductPrediction = () => {
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [product, setProduct] = useState("");
    const [subCategories, setSubCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (category && productData[category]) {
            setSubCategories(Object.keys(productData[category]));
            console.log(productData[category]);
        }
    }, [category]);

    // useEffect(() => {
    //     if (category && subCategory && productData[category][subCategory]) {
    //         setProducts(Object.keys(productData[category][subCategory]['product_names']));
    //         console.log(productData[category][subCategory]['product_names'], "*****************************");
    //     }
    // }, [category, subCategory]);
    useEffect(() => {
        if (category && subCategory && productData[category][subCategory]) {
          setProducts(productData[category][subCategory]['product_names']);
          console.log(productData[category][subCategory]['product_names'], "*****************************");
        }
      }, [category, subCategory]);

    const handleProductChange = (e) => {
        setProduct(e.target.value);
    
        fetch(`${API_URL}/similar_products`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ category, subCategory, product: e.target.value }),
        })
        .then(response => response.json())
        .then(data => {
          // handle the response data
          console.log(data);
          Plotly.newPlot('scatterplot-container1', data, { title : 'Similar Product Prediction' });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      };

    return (
        <div className="similar-product-container">
            <h1>Similar Product Prediction</h1>
            <div className="input-container">
                <label htmlFor="category">Category:</label>
                <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    {Object.keys(productData).map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                <label htmlFor="subCategory">Sub-Category:</label>
                <select id="subCategory" value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
                    {subCategories.map((subCategory) => (
                        <option key={subCategory} value={subCategory}>
                            {subCategory}
                        </option>
                    ))}
                </select>

                <label htmlFor="product">Product:</label>
                <select id="product" value={product} onChange={handleProductChange}>
                    {products.map((product, index) => (
                        <option key={index} value={product}>
                            {product}
                        </option>
                    ))}
                </select>
                <div id="scatterplot-container1"></div>
            </div>
        </div>
    );

};

export default SimilarProductPrediction;