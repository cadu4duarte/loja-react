import React from "react";
import "./cart.css"

export function Cart() {

  let storageContent = [];

  storageContent = JSON.parse(localStorage.getItem("products"));
  
  return(
    <div className="cart">
      {storageContent === null ? 
        <h1>Cart is empty</h1> 
        :
        <div>
        {storageContent.map((item) => {
         return(
          <div className="cartBox">
            <div className="cartImage"> 
              <img src={ item.image }/>
            </div>
            <div>
              { item.title }
            </div>
            <div>
              R$ { item.price }
            </div>
          </div>
         )
        })}
      </div>
      }
    </div>
  );
}