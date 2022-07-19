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


  //filtrando os itens pela categoria e setando o resultado no productsCategory
  function filterProducts(cat) {
      const filtering = products.filter(item => item.category === cat)
      setProductsCategory(filtering)
      
  }

  //resetando o filtro
  async function resetFilter() {
    const response = await api.get('https://fakestoreapi.com/products');

    // setProducts(response.data);
    setProductsCategory(response.data)
    
  }

  //trazendo os valores únicos das categorias
  const AllCategories = [ ...new Set(products.map(item => item.category))];

  function addInCart(product) {
    console.log(product)

    //getCart recebe os itens dentro do local storage e é um array vazio
    let getCart = JSON.parse(localStorage.getItem("products")) || [];

    //add novos itens no array
    getCart.push(product);

    //setando os itens do array no local storage
    localStorage.setItem("products", JSON.stringify(getCart));
    alert("Product set in cart");
 
  }

  return(
   <div className="container">
    <div className="filterBox">
      <fieldset>
        <legend>Filtrar por:</legend>
        {new Set(AllCategories.map(item => {
          return(
            <>
              <input type="radio" id={item} name='option' value='option' onClick={()=>filterProducts(item)}/>
              <label htmlFor={item}>{item}</label> <br/>
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
          <p>{item.id}</p>
          <p>{item.price}</p>
          <button onClick={()=> addInCart(item)}>Buy</button>
        </div>
      )}

    </div>
   </div>
  );
}