import React, { useState } from "react"
import "../styles/category-btn.css"

const CategoryBtn = ({ datos, filterByCategory, setFilteredData, filteredData }) => {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <nav className={show ? "nav-active" : "nav"}>
        <button className="category-btn" onClick={() => handleShow()}>Filters</button>
        {show ? datos.map((dato) => (
                <button className="category-mobile" key={dato.id} onClick={() => filterByCategory(dato.category)}>{dato.category}</button>
        )) : null}
    </nav>
  )
}

export default CategoryBtn
