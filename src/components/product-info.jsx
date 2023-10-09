import React from "react"

const ProductInfo = ({ producto }) => {
  return (
    <div>
        <ul className="products-list">
                <li className="product" key={producto.id}>
                    <img className="product-img" src={producto.product_img} alt={producto.name + "imagen"}/>
                    <div className="product-row">
                    <h1 className="product-title">{producto.name}</h1>
                    {producto.categories && (
                        <p className="product-category">{producto.categories.category_name}</p>
                    )}
                    </div>
                    <p>{producto.description}</p>
                    <div className="product-row">
                    <h3 className="product-price">{producto.price}€</h3>
                    <p>{producto.critics}/5⭐</p>
                    <p>{producto.vegan === true ? "Vegan" : null}</p>
                    </div>
                </li>

            </ul>
    </div>
  )
}

export default ProductInfo
