import React from "react"
import "../styles/category-container.css"
import { Link } from "react-router-dom"

const CategoryContainer = ({ datos, filterByCategory, setFilteredData, filteredData, categories }) => {
  return (
      <div className="categories-column">
        <h1>Categorías</h1>
        <ul className="categories-container">
        { filteredData.length > 0
          ? <Link className="category-item" to={"/"}>Eliminar Filtros</Link> : null}
            {categories.map((category) => (
              <Link to={`/categoria/${category.category_name}`} key={category.id} className="category-item">
                <img className="category-item-img" src={category.category_img} alt={category.category_name}/>
                <button className="category-item-btn" key={category.id} onClick={() => filterByCategory(category.id)}>{category.category_name}</button>
                <p className="category-total-products">{category.total_products}</p>
              </Link>
            ))}
        </ul>
    </div>
  )
}

export default CategoryContainer
