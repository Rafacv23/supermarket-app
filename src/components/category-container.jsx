import React from "react"
import "../styles/category-container.css"

const CategoryContainer = ({ datos, filterByCategory, setFilteredData, filteredData }) => {
  return (
      <div className="categories-column">
        <h1>Categories</h1>
        <ul className="categories-container">
        {filteredData.length > 0
          ? <button className="category-item" onClick={() => setFilteredData(datos)}>No Filters</button> : null
        }
            {datos.map((dato) => (
                <button className="category-item" key={dato.id} onClick={() => filterByCategory(dato.category)}>{dato.category}</button>
            ))}
        </ul>
    </div>
  )
}

export default CategoryContainer
