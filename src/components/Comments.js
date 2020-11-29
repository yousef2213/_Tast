import React from "react";
import Person from "../images/3.png";
import { BsFillStarFill } from "react-icons/bs";
function Comments() {
  return (
    <div className="container mx-auto p-0">
      <div className="row mx-0">
        <div className="col-12 col-md-10  ml-auto my-3 mb-5">
          <h4 className="text-right font-main font-weight-bold my-3">
            التعليقات(1)
          </h4>
          <div className="text-right">
            <button className="btnComment font-main my-3">اضافة تعليق</button>
          </div>
          <div className="Test mt-3">
            <div className="DivImg">
              <img src={Person} className="Person" alt="Person" />
            </div>
            <div className="pr-3">
              <div className="PersonsDC">
                <h6 className="text-right font-main font-weight-bold">
                  احمد النجار
                </h6>
                <div className="icons text-right">
                  <span className="sp">نوفمبر 10 2020</span>
                  <BsFillStarFill className="icon" />
                  <BsFillStarFill className="icon" />
                  <BsFillStarFill className="icon" />
                  <BsFillStarFill className="icon" />
                  <BsFillStarFill className="icon text-muted" />
                </div>
              </div>
              <p className="text-right text-muted pTest pt-2">
                Theming the navbar has never been easier thanks to the
                combination of theming classes and background-color utilities.
                Choose from .navbar-light for use with light background colors,
                or .navbar-dark for dark background colors. Then, customize with
                .bg-* utilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
