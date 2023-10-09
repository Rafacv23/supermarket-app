import React from "react"
import "../styles/category-container.css"

const CategoryContainer = ({ datos, filterByCategory, setFilteredData, filteredData, categories }) => {
  return (
      <div className="categories-column">
        <h1>Categorías</h1>
        <ul className="categories-container">
        {/* filteredData.length > 0
          ? <button className="category-item" onClick={() => setFilteredData(datos)}>Eliminar Filtros</button> : null
        */}
            {categories.map((category) => (
              <div key={category.id} className="category-item" onClick={() => filterByCategory(category.id)}>
                <img className="category-item-img" src={category.category_img} alt={category.category_name}/>
                <button className="category-item-btn" key={category.id} onClick={() => filterByCategory(category.id)}>{category.category_name}</button>
                <p className="category-total-products">{category.total_products}</p>
              </div>
            ))}
        </ul>
    </div>
  )
}

export default CategoryContainer
