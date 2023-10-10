import React from "react"
import CategoryBtn from "../components/category-btn"
import CategoryContainer from "../components/category-container"
import Product from "../components/product"

const Home = ({ categories, datos }) => {
  return (
        <div>
            <CategoryBtn categories={categories} datos={datos}></CategoryBtn>
            <CategoryContainer categories={categories} datos={datos}></CategoryContainer>
            <Product datos={datos}></Product>
        </div>
  )
}

export default Home
