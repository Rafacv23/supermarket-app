import React from "react"
import { useParams } from "react-router-dom"

const ProductDetails = ({ datos }) => {
  const { productId } = useParams()
  const producto = datos.find((producto) => producto.id === productId)

  return (
    <div>
      {producto ? (
        <div>
          <p key={producto.id}>{producto.name}</p>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  )
}

export default ProductDetails
