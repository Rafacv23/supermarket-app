import React, { useState, useEffect } from "react"
import { obtenerDatos } from "./api/api.js"
import "./styles/App.css"
import "./styles/products.css"
import CategoryContainer from "./components/category-container.jsx"
import CategoryBtn from "./components/category-btn.jsx"

function App () {
  const [datos, setDatos] = useState([])
  const [filteredData, setFilteredData] = useState([])

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
    const filteredData = datos.filter((dato) => dato.category === category)
    setFilteredData(filteredData)
  }

  return (
    <div className="App">
      <h1>Easy Market</h1>
      <CategoryBtn datos={datos} filterByCategory={filterByCategory}></CategoryBtn>
      <CategoryContainer setFilteredData={setFilteredData} filteredData={filteredData} datos={datos} filterByCategory={filterByCategory}></CategoryContainer>
      <ul className="products-list">
        {filteredData.map((dato) => (
          <li className="product" key={dato.id}>
            <div className="product-row">
              <h1 className="product-title">{dato.name}</h1>
              <p className="product-category">{dato.category}</p>
            </div>
            <p>{dato.description}</p>
            <div className="product-row">
              <h3 className="product-price">{dato.price}€</h3>
              <p>{dato.critics}/5⭐</p>
              <p>{dato.vegan === true ? "Vegan" : null}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
