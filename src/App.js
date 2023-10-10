import React, { useState, useEffect } from "react"
import { obtenerDatos, getCategories } from "./api/api.js"
import "./styles/App.css"
import "./styles/products.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home.jsx"
import NotFound from "./pages/not-found.jsx"
import ProductDetails from "./pages/product-details.jsx"
import Category from "./pages/category.jsx"
import Header from "./components/header.jsx"

function App () {
  const [datos, setDatos] = useState([])
  const [categories, setCategories] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [filteredDatos, setFilteredDatos] = useState([])

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  const filterDatos = () => {
    const filtered = datos.filter((dato) => {
      return dato.name.toLowerCase().includes(searchValue.toLowerCase())
    })
    setFilteredDatos(filtered)
  }

  useEffect(() => {
    filterDatos()
  }, [searchValue, datos])

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
      <Header searchValue={searchValue} handleSearchChange={handleSearchChange}></Header>
      <Routes>
        <Route path="/" element={<Home categories={categories} datos={filteredDatos || datos} setCategories={setCategories}/>}/>
        <Route path="/producto/:productId" element={<ProductDetails categories={categories} datos={datos}/>}/>
        <Route path="/categoria/:categoryName" element={<Category datos={filteredDatos.length === 0 ? <h2>No hay productos</h2> : filteredDatos || datos} categories={categories}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
