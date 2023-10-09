import React, { useState, useEffect } from "react"
import { obtenerDatos, getCategories } from "./api/api.js"
import "./styles/App.css"
import "./styles/products.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home.jsx"
import NotFound from "./pages/not-found.jsx"
import ProductDetails from "./pages/product-details.jsx"

function App () {
  const [datos, setDatos] = useState([])
  const [filteredData, setFilteredData] = useState([])
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
        setFilteredData(data)
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error)
      })
  }, [])

  const filterByCategory = (category) => {
    const filteredData = datos.filter((dato) => dato.categories.id === category)
    setFilteredData(filteredData)
  }

  return (
    <div className="App">
      <h1>Easy Market</h1>
      <Routes>
        <Route path="/" element={<Home setFilteredData={setFilteredData} filterByCategory={filterByCategory} filteredData={filteredData} categories={categories} setCategories={setCategories}/>}/>
        <Route path="/product/:productId" element={<ProductDetails datos={datos}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
