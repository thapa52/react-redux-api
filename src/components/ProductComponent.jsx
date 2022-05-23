import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    return (
      <div className="card" style={{ width: "18rem" }} key={product.id}>
        <Link
          className="link"
          to={`/product/${product.id}`}
          style={{ textDecoration: "none" }}
        >
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <div>
              <p className="card-text">$ {product.price}</p>
              <p className="card-text2">{product.category}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="product-component">
      {products.length == 0 ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        renderList
      )}
    </div>
  );
};

export default ProductComponent;
