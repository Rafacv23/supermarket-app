import React, { useState, useEffect } from "react"
import { obtenerDatos, getCategories } from "./api/api.js"
import "./styles/App.css"
import "./styles/products.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home.jsx"
import NotFound from "./pages/not-found.jsx"
import ProductDetails from "./pages/product-details.jsx"
import Category from "./pages/category.jsx"

function App () {
  const [datos, setDatos] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((categories) => {
        setCategories(categories)
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error)
      })
  }, [])

  useEffect(() => {
    obtenerDatos()
      .then((data) => {
        setDatos(data)
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error)
      })
  }, [])

  return (
    <div className="App">
      <h1>Easy Market</h1>
      <Routes>
        <Route path="/" element={<Home categories={categories} datos={datos} setCategories={setCategories}/>}/>
        <Route path="/producto/:productId" element={<ProductDetails datos={datos}/>}/>
        <Route path="/categoria/:categoryName" element={<Category datos={datos} categories={categories}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
