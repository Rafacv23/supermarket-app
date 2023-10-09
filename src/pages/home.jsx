import React from "react"
import CategoryBtn from "../components/category-btn"
import CategoryContainer from "../components/category-container"
import Product from "../components/product"

const Home = ({ categories, setFilteredData, filteredData, datos, filterByCategory }) => {
  return (
        <div>
            <CategoryBtn categories={categories} datos={datos} filterByCategory={filterByCategory}></CategoryBtn>
            <CategoryContainer setFilteredData={setFilteredData} filteredData={filteredData} categories={categories} datos={datos} filterByCategory={filterByCategory}></CategoryContainer>
            <Product filteredData={filteredData}></Product>
        </div>
  )
}

export default Home
