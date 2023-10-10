import React from "react"
import { useParams } from "react-router-dom"
import CategoryBtn from "../components/category-btn"
import CategoryContainer from "../components/category-container"
import Product from "../components/product"

const Category = ({ categories, setFilteredData, filteredData, filterByCategory, datos }) => {
  let { categoryName } = useParams()
  categoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1).replace(/[-_]/g, " ")
  const categoria = categories.find((category) => categoryName === category.category_name)

  const filteredDatos = datos.filter((product) => product.categories.category_name === categoryName)

  return (
    <div>
      {categoria
        ? <div>
          <CategoryBtn categories={categories} datos={datos}></CategoryBtn>
          <CategoryContainer categories={categories} datos={datos}></CategoryContainer>
          <h2>{categoryName}</h2>
          <div>
            {<Product datos={filteredDatos}/>}
          </div>
        </div>
        : <h1>Categoría no encontrada</h1>}
    </div>
  )
}

export default Category
