import React from "react";
import { useEffect, useState } from "react";
import api from "../../server/api";
import "./home.css";

export function Home() {
  const [products, setProducts] = useState([]);
  const [productsCategory, setProductsCategory] = useState([]);
  

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('https://fakestoreapi.com/products');

      setProducts(response.data);
      setProductsCategory(response.data)
    }

    loadProducts();
  }, []);

  function filterProducts(cat) {
      const filtering = products.filter(item => item.category === cat)
      setProductsCategory(filtering)
      
  }

  async function resetFilter() {
    const response = await api.get('https://fakestoreapi.com/products');

    // setProducts(response.data);
    setProductsCategory(response.data)
    
  }


  const AllCategories = [ ...new Set(products.map(item => item.category))];


  return(
   <div className="container">
    <div className="filterBox">
      <fieldset>
        <legend>Filtrar por:</legend>
        {new Set(AllCategories.map(item => {
          return(
            <>
              <input type="radio" id={item} name='option' value='option' onClick={()=>filterProducts(item)}/>
              <label for={item}>{item}</label> <br/>
            </>
          )
        }))}

          <input type="radio" name='option' value='option' onClick={()=>resetFilter()}/>
          <label>All products</label>


      </fieldset>
    </div>

    <div className="products">
      {productsCategory.map((item) =>
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