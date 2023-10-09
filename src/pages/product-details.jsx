import React from "react"
import { useParams } from "react-router-dom"
import ProductInfo from "../components/product-info"

const ProductDetails = ({ datos }) => {
  const { productId } = useParams()
  const producto = datos.find((producto) => producto.id === productId)

  return (
    <div>
      {producto ? (
        <ProductInfo producto={producto}/>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  )
}

export default ProductDetails
