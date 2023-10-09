import React, { useState } from "react"
import "../styles/category-btn.css"

const CategoryBtn = ({ datos, filterByCategory, setFilteredData, filteredData, categories }) => {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <nav className={show ? "nav-active" : "nav"}>
        <button className="category-btn" onClick={() => handleShow()}>Filtros</button>
        {show ? categories.map((dato) => (
          <div key={dato.id} className="category-item-mobile" onClick={() => filterByCategory(dato.id)}>
                <img className="category-item-img" src={dato.category_img} alt={dato.category_name}/>
                <button className="category-mobile" key={dato.id} onClick={() => filterByCategory(dato.id)}>{dato.category_name}</button>
                <p className="category-total-products">{dato.total_products}</p>
              </div>
        )) : null}
    </nav>
  )
}

export default CategoryBtn
