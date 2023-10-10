import React from "react"
import "../styles/category-container.css"
import Carousel from "react-elastic-carousel"
import { Link } from "react-router-dom"

const CategoryContainer = ({ categories }) => {
  return (
      <div className="categories-column">
        <h1>Categorías</h1>
        <div className="categories-container">
        <Carousel initialFirstItem={0} showArrows={false} pagination={false} itemsToShow={7} itemPadding={[4]} >
          <Link className="category-item" to={"/"}>Eliminar Filtros</Link>
            {categories.map((category) => (
              <Link to={`/categoria/${category.category_name}`} key={category.id} className="category-item">
                <img className="category-item-img" src={category.category_img} alt={category.category_name}/>
                <button className="category-item-btn" key={category.id}>{category.category_name}</button>
                <p className="category-total-products">{category.total_products}</p>
              </Link>
            ))}
        </Carousel>
        </div>
    </div>
  )
}

export default CategoryContainer
