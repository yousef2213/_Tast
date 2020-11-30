import React from "react";
import Productsdata from "../data/Productsdata";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineRedo } from "react-icons/ai";
import { Link } from "react-router-dom";
function Products({ Products = Productsdata }) {
  return (
    <div className="container">
      <div className="row bkws">
        {Products.map(({ id, name, img, price }) => {
          return (
            <div key={id} className="col-12 col-md-2 my-2 text-right">
              <Link to="/SingleProduct" className="text-dark">
                <div className="first">
                  <img src={img} className="imgProd" alt="img" />
                  <div className="icons text-right">
                    <BsFillStarFill className="iconP text-muted" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                    <BsFillStarFill className="iconP" />
                  </div>
                  <h6 className="nameP">{name}</h6>
                  <h6 className="priceP">
                    ${price} <span className="text-muted">$133 </span>
                  </h6>
                </div>
              </Link>
            </div>
          );
        })}
        <div className="col-12">
          <button className="font-main btn_more">
            <AiOutlineRedo className="ml-2" /> عرض المزيد
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
