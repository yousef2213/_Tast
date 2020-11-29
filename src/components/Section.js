import React from "react";
import Product from "../images/2.png";
import Product1 from "../images/1.png";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
function Section() {
  return (
    <div className="container mx-auto p-0">
      <div className="row my-5 mx-0">
        <div className="col-12 col-md-9 mx-auto pt-3 text-right">
          <div>
            <h6>الوصف</h6>
            <p className="text-muted p">
              Theming the navbar has never been easier thanks to the combination
              of theming classes and background-color utilities. Choose from
              .navbar-light for use with light background colors, or
              .navbar-dark for dark background colors.
            </p>
            <div className="bkws">
              <img src={Product} className="Product" alt="Product" />
              <div className="py-3">
                <p className="text-muted p pt-4">
                  Theming the navbar has never been easier thanks to the
                  combination of theming classes and background-color utilities.
                  Choose from .navbar-light for use with light background
                  colors, 
                </p>
                <img src={Product} className="Product" alt="Product" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mx-auto pt-3">
          <div className="cart">
            <img src={Product1} className="Product1Img" alt={Product1} />
            <div className="icons text-right">
              <BsFillStarFill className="icon text-muted" />
              <BsFillStarFill className="icon" />
              <BsFillStarFill className="icon" />
              <BsFillStarFill className="icon" />
              <BsFillStarFill className="icon" />
            </div>
            <h6 className="text-right mt-2 text-muted">
              حذاء رياضي للرجال - اسود في رمادي
            </h6>
            <div>
              <h5 className="text-right pb-2">$329.99</h5>
            </div>
            <div className="d-flex justify-content-between">
              <AiOutlineHeart className="heart1 align-self-center" />
              <button className="d-block w-75 btnadd mb-0">
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
