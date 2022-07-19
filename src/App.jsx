import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import { Header } from "./components/Header/header.jsx";
import { Home } from "./pages/Home/home";
import { Cart } from "./pages/Cart/cart";


function App() {
  

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
