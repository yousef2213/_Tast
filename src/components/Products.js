import React, { useContext, useState } from "react";

import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineRedo } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { QafeerContext } from "../context/context";

function Products() {
  const [Products, setProducts] = useState([]);
  const { AllProducts = [], setSingleProduct } = useContext(QafeerContext);
  useEffect(() => {
    // let Products = AllProducts.filter((product) => product.id <= 80);
    setProducts(AllProducts.filter((product) => product.id <= 80));
  }, []);

  // const seeMoreProducts = () => {
  //   setProducts(AllProducts.filter((product) => product.id <= 100));
  // };
  return (
    <div className="container">
      <div className="row">
        {Products.map(({ id, name, image, price }) => {
          return (
            <div
              key={id}
              onClick={() => setSingleProduct(id)}
              className="col-12 col-md-2 my-2 text-right mx-0"
            >
              <Link to="/SingleProduct" className="text-dark">
                <div className="first">
                  <img src={image} className="imgProd" alt="img" />
                  <div className="icons text-right">
                    <BsFillStarFill className="iconP text-muted" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                  </div>
                  <h6 className="nameP">{name}</h6>
                </div>
              </Link>
            </div>
          );
        })}
        <div className="col-12">
          <button className="font-main btn_more" onClick={() =>  setProducts(AllProducts.filter((product) => product.id <= 200))}>
            <AiOutlineRedo className="ml-2" /> عرض المزيد
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
