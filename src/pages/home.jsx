import React from "react";
import { useEffect, useState } from "react";
import api from "../server/api";
import "./home.css";

export function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('https://fakestoreapi.com/products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  return(
   <div className="container">
    <div className="filterBox">
      filter
    </div>

    <div className="products">
      {products.map((item) =>
        <div className="productsBox" key={Math.random()}>
          <div className="imgBox">
            <img src={item.image}/>
          </div>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
        </div>
      )}

    </div>
   </div>
  );
}