import React, { useContext } from "react";
import Product1 from "../../images/1.png";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { QafeerContext } from "../../context/context";
function Section() {
  const { SingleProduct = {} } = useContext(QafeerContext);
  const {
    images = [],
    price,
    name,
    regular_price,
    sale_price,
    rating_avg,
    description,
    short_description,
  } = SingleProduct;
  return (
    <div className="container mx-auto p-0">
      <div className="row my-5 mx-0">
        <div className="col-12 col-md-9 mx-auto pt-3 text-right">
          <div>
            <h6>الوصف</h6>
            <p className="text-muted ">{description}</p>
            <div className="">
              <img src={images[0]} className="Product" alt="Product" />
              <div className="py-3">
                <p className="text-muted  pt-4">{short_description}</p>
                <img src={images[1]} className="Product" alt="Product" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mx-auto psamll_">
          <div className="cart">
            <img src={images[0]} className="Product1Img" alt={Product1} />
            <div className="icons text-right psamll_">
              <BsFillStarFill className="icon text-muted" />
              <BsFillStarFill className="icon" />
              <BsFillStarFill className="icon" />
              <BsFillStarFill className="icon" />
              <BsFillStarFill className="icon" />
            </div>
            <h6 className="text-right mt-2 text-muted psamll_">{name}</h6>
            <div className="d-flex justify-content-between px-3">
              <h6 className="h2p mb-0 align-self-center">
                <span className="text-muted sale_price">
                  ${regular_price || 0}
                </span>
                ${sale_price}
              </h6>
              <AiOutlineHeart className="heart1 align-self-center" />
            </div>
            <div className="psamll_">
              <button className="d-block w-100 btnadd mb-0 py-2 px-2">
                اضافة لمشتريات النقير
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
