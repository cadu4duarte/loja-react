import React from "react";
import {Link} from "react-router-dom";
import "./header.css"

export function Header() {
  return(
    <header>
      <h1>
        <Link to="/">FakeShop</Link>
      </h1>

      <ul>
        <li>
          <Link to="/cart">cart</Link>
        </li>

        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </header>
  );
}