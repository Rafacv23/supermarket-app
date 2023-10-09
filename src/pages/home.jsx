import React from "react"
import CategoryBtn from "../components/category-btn"
import CategoryContainer from "../components/category-container"

const Home = ({ categories, setFilteredData, filteredData, datos, filterByCategory }) => {
  return (
        <div>
            <CategoryBtn categories={categories} datos={datos} filterByCategory={filterByCategory}></CategoryBtn>
            <CategoryContainer setFilteredData={setFilteredData} filteredData={filteredData} categories={categories} datos={datos} filterByCategory={filterByCategory}></CategoryContainer>
            <ul className="products-list">
                {filteredData.map((dato) => (
                <li className="product" key={dato.id}>
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
                </li>
                ))}
            </ul>
        </div>
  )
}

export default Home
