import React from "react"
import { useParams } from "react-router-dom"
import ProductInfo from "../components/product-info"
import CategoryContainer from "../components/category-container"
import CategoryBtn from "../components/category-btn"

const ProductDetails = ({ datos, categories }) => {
  const { productId } = useParams()
  const producto = datos.find((producto) => producto.id === productId)

  return (
    <div>
      <CategoryContainer categories={categories}/>
      <CategoryBtn categories={categories}/>
      {producto ? (
        <ProductInfo producto={producto}/>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  )
}

export default ProductDetails
