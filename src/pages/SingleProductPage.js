import React, { useContext } from "react";
import Nav from "../components/SectionSingleTabs/Nav";
import Products from "../components/Products.js";
import { QafeerContext } from "../context/context";
import SingleProduct from "../components/SingleProduct";
import loading from "../images/loading.svg";
function SingleProductPage() {
  const { SingleProduct: SignNicName } = useContext(QafeerContext);
  if (!SignNicName.id) {
    return (
      <div className="container mx-auto px-0 my-3">
        <div className="row mx-0 py-5">
          <div className="col-12 mx-auto text-center">
            <img src={loading} alt="loading" />
            <h2 className="text-uppercase text-orange text-center py-3">
              Loading ....
            </h2>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <SingleProduct />
      <Nav />
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
