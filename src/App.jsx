import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import { Header } from "./components/Header/header.jsx";
import { Home } from "./pages/Home/home";


function App() {
  

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
