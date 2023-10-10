import React, { useState } from "react"
import "../styles/category-btn.css"
import { Link } from "react-router-dom"

const CategoryBtn = ({ categories }) => {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <nav className={show ? "nav-active" : "nav"}>
        <button className="category-btn" onClick={() => handleShow()}>Filtros</button>
        {show
          ? <>
          <Link to={"/"} className="category-mobile">Eliminar Filtros</Link>
          {categories.map((dato) => (
            <Link to={`/categoria/${dato.category_name}`} key={dato.id} className="category-item-mobile">
              <img className="category-item-img" src={dato.category_img} alt={dato.category_name}/>
              <button className="category-mobile">{dato.category_name}</button>
              <p className="category-total-products">{dato.total_products}</p>
            </Link>
          ))}
        </> : null}
    </nav>
  )
}

export default CategoryBtn
