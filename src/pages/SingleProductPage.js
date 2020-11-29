import React from "react";
import Comments from "../components/Comments";
import More from "../components/More";
import Nav from "../components/Nav";
import Section from "../components/Section";
import SingleProduct from "../components/SingleProduct";
import Products from "../components/Products.js";
function SingleProductPage() {
  return (
    <div>
      <SingleProduct />
      <Nav />
      <Section />
      <More />
      <Comments />
      <div className="mb-5">
        <div className="container">
          <div className="row py-3">
            <div className="col-12">
              <h4 className="text-right font-main font-weight-bold">
                شاهد ايضا
              </h4>
            </div>
          </div>
        </div>
        <Products />
      </div>
    </div>
  );
}

export default SingleProductPage;
