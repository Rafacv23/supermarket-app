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
                <button className="category-mobile" key={dato.id} onClick={() => filterByCategory(dato.id)}>{dato.category_name}</button>
        )) : null}
    </nav>
  )
}

export default CategoryBtn
