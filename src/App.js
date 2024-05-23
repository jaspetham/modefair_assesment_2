import './App.css';
import React, { useEffect, useState } from "react";
import data from "./products.json";
import plusSVG from "./plus.svg";
import minusSVG from "./minus.svg";

function App() {
    const [products, setProducts] = useState([]);
    const [expanded, setExpanded] = useState({});

    useEffect(() => {
      setProducts(data);
    }, []);

    const toggleDetails = (id) => {
      setExpanded((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    };
    return (
      <div className="main-wrapper border-1">
        <div className="product-table bg-slate-300">
          <div className="border-1"></div>
          <div className="border-1">Product</div>
          <div className="border-1">ID</div>
          <div className="border-1">Unit Price</div>
          <div className="border-1">Qty per unit</div>
        </div>
        <div className="data-wrapper">
          {products.map((product,index) => (
            <div>
              <div
                className={`product-table ${index % 2 === 0 ? "bg-slate-200" : "bg-white-100"}`}
                key={product.ProductID}
              >
                <div className="border-1 flex items-center justify-center">
                  <button
                    onClick={() => toggleDetails(product.ProductID)}
                    className="plus-img"
                  >
                    <img
                      src={expanded[product.ProductID] ? minusSVG : plusSVG}
                      alt="toggle"
                    />
                  </button>
                </div>
                <div className="border-1">{product.ProductName}</div>
                <div className="border-1">{product.ProductID}</div>
                <div className="border-1">{product.UnitPrice}</div>
                <div className="border-1">{product.QuantityPerUnit}</div>
              </div>
              {expanded[product.ProductID] && (
                <div className="product-details-wrapper border-1">
                  <div></div>
                  <div className="product-details">
                    <div>
                      <span className="font-medium pr-2">In Stock:</span>
                      {product.UnitsInStock} units
                    </div>
                    <div>
                      <span className="font-medium pr-2">On Order:</span>
                      {product.UnitsOnOrder} units
                    </div>
                    <div>
                      <span className="font-medium pr-2">Reorder Level:</span>
                      {product.ReorderLevel} units
                    </div>
                    <div>
                      <span className="font-medium pr-2">Discontinued:</span>
                      {product.Discontinued ? "Yes" : "No"}
                    </div>
                    <div>
                      <span className="font-medium pr-2">Category:</span>
                      {product.Category.Description}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
}

export default App;
