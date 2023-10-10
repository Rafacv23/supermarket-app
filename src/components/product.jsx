import React from "react"
import { Link } from "react-router-dom"

const Product = ({ datos }) => {
  return (
        <div>
            <ul className="products-list">
                {datos.map((dato) => (
                <Link to={`/producto/${dato.id}`} className="product" key={dato.id}>
                    <img className="product-img" src={dato.product_img} alt={dato.name + "imagen"}/>
                    <div className="product-row">
                    <h1 className="product-title">{dato.name}</h1>
                    {dato.categories && (
                        <p className="product-category">{dato.categories.category_name}</p>
                    )}
                    </div>
                    <p>{dato.description}</p>
                    <div className="product-row">
                    <h3 className="product-price">{dato.price}€</h3>
                    <p>{dato.critics}/5⭐</p>
                    <p>{dato.vegan === true ? "Vegan" : null}</p>
                    </div>
                </Link>
                ))}
            </ul>
        </div>
  )
}

export default Product
