import React, { useState, useEffect } from "react";
import "./ProductList.css";
import Search from "../search/Search";
import Categories from "../categories/Categories";
import Product from "../products/Product";
import { products as productData } from "../../products-data";

const allCategories = [
  "all",
  ...new Set(productData.map((product) => product.category)),
];

const ProductList = () => {
  const [products, setProducts] = useState(productData);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const fiterProducts = (category) => {
    if (category === "all") {
      setProducts(productData);
      return;
    }
    const newProducts = productData.filter(
      (product) => product.category === category
    );
    setProducts(newProducts);
  };

  useEffect(() => {
    console.log(allCategories);
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  }, [search, products]);
  return (
    <>
      <div className="header">
        <header className="container">
          <h1 className="--color-white --text-center">
            <span className="--color-danger">Product </span>Filter
          </h1>
          <div className="--flex-between --flex-dir-column --py">
            <Search inputValue={search} onInputChange={handleSearch} />
            <Categories categories={categories} filterItems={fiterProducts} />
          </div>
        </header>
      </div>
      <div className="product-container">
        <div className="products container --grid-25 -py2">
          {filteredProducts.length === 0 ? (
            <h3>No Product Found!!!</h3>
          ) : (
            filteredProducts.map((product) => {
              const { id, title, img, price } = product;
              return (
                <div key={id}>
                  <Product title={title} img={img} price={price} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
