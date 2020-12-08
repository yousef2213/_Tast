import React from "react";
import Nav from "../components/SectionSingleTabs/Nav";
import Products from "../components/Products.js";
import SingleProduct from "../components/SingleProduct";
import loading from "../images/loading.svg";
import { useEffect } from "react";
import { useState } from "react";
function SingleProductPage(props) {
  const [Single, SetSingle] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getSingleProduct(props.match.params.id);
  }, []);
  const getSingleProduct = async (id) => {
    let Id_product = id;
    let myHeaders = new Headers();
    let requestOptions = {
      method: "Get",
      headers: myHeaders,
      redirect: "follow",
    };
    let result = await fetch(`https://qafeer.net/wp-json/bestgator/v1/getSingleProduct?product_id=${Id_product}`,requestOptions);
    let data = await result.json();
    SetSingle(data.prodcut_data);
  };
  if (Single.length === 0) {
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
      <SingleProduct product={Single} Id={props.match.params.id} />
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
