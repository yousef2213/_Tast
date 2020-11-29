import React from "react";
import { RiArrowUpDownFill } from "react-icons/ri";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Products from "../components/Products";
import ProductsD from "../data/Productsdata"

function Merchants() {
  return (
    <div className="container-fluid mx-0 px-0 py-5">
      <div className="row mx-0 px-0">
        <Hero />
      </div>
      <div className="row mx-0 px-0 py-5">
        <Hero2 />
      </div>
      <div className="row mx-0 px-0 py-5">
        <div className="container">
          <div className="row mx-0 pb-3">
            <div className="col-12 text-right myproduct">
              <h4 className="font-main">منتجاتي</h4>
              <div className="btn_nav_product">
                <div className="nav">
                  <ul className="nav-bar  d-flex justify-content-between mr-0 pr-0 mt-4">
                    <div className="d-flex">
                      <li className="li font-main">هواتف</li>
                      <li className="li cl font-main"> احذية</li>
                    </div>
                    <div>
                      <RiArrowUpDownFill className="arrow_top_bottom" />
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Products Products={ProductsD} />
      </div>
    </div>
  );
}

export default Merchants;
