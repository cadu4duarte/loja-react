import React from "react";
import "./header.css"

export function Header() {
  return(
    <header>
      <h1>FakeShop</h1>

      <ul>
        <li>
          <a href="">cart</a>
        </li>

        <li>
          <a href="">about</a>
        </li>
      </ul>
    </header>
  );
}