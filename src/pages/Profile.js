import React from "react";
import { RiArrowUpDownFill } from "react-icons/ri";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Products from "../components/Products";

function Merchants() {
  return (
    <div className="container-fluid mx-0 px-0 py-5">
      <div className="row mx-0 px-0">
        <Hero />
      </div>
      <div className="row mx-0 px-0 pt-sm-2 pt-md-5">
        <Hero2 />
      </div>
      <div className="row mx-0 px-0 py-5">
        <div className="container">
          <div className="row mx-0 pb-3">
            <div className="col-12 text-right myproduct">
              <h4 className="font-main py-3">منتجاتي</h4>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link li active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" >
                    هواتف
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link li" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                     احذية
                  </a>
                </li>
              </ul>
              <div className="tab-content py-3" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <Products />
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <Products />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Merchants;
