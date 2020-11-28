import React from "react";
import Product from "../images/1.png";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { FaCcPaypal,FaCcVisa } from "react-icons/fa";
import { RiVisaFill, RiVisaLine } from "react-icons/ri";
function SingleProduct() {
  return (
    <div className="container mx-auto">
      <div className="row mx-0">
        <div className="col-12 col-md-6 align-self-center mx-0 single1">
          <div className="icons text-right">
            <BsFillStarFill className="icon" />
            <BsFillStarFill className="icon" />
            <BsFillStarFill className="icon" />
            <BsFillStarFill className="icon" />
            <BsFillStarFill className="icon" />
            <span className="ml-2">تعليق</span>
          </div>
          <h3 className="text-right mt-2 mb-5">
            حذاء رياضي للرجال - اسود في رمادي
          </h3>
          <div className="d-flex justify-content-end">
            <button className="btnB clc">اسود رمادي</button>
            <button className="btnW">ابيض</button>
            <h6 className="mb-0 pb-0 align-self-center">الالون</h6>
          </div>
          <div className="d-flex justify-content-end pt-2">
            <button className="btnM">39</button>
            <button className="btnM">38</button>
            <button className="btnM clc">37</button>
            <h6 className="mb-0 pb-0 align-self-center">المقاس</h6>
          </div>
          <div className="d-flex  justify-content-center bkw">
            <div className="px-2">
              <h2 className="h2p">$329.99</h2>
            </div>
            <div className="btnIn px-2">
              <button className="d-block w-100 btnadd">
                اضافة لمشتريات النقير
              </button>
              <input className="form-control inp" />
              <span className="inc">+</span>
              <span className="dec">-</span>
            </div>
            <div className="px-2">
              <AiOutlineHeart className="heart" />
            </div>
          </div>
          <h6 className="text-right pt-3 text-muted">التوصيل مجانا</h6>
          <div className="text-right mt-3">
            <span className="pay">الدفع</span>
            <RiVisaLine className="cach" />
            <FaCcPaypal className="cach" />
            <FaCcPaypal className="cach" />
            <FaCcVisa className="cach" />
            <FaCcVisa className="cach" />
            <RiVisaFill className="cach" />
            <RiVisaFill className="cach" />
            <span className="more">المزيد</span>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex mx-auto single mb-3">
          <img src={Product} className=" w-100 d-block" alt="Product" />
          <div className="rowking mb-3">
            <img src={Product} className="img imgB" alt="Product" />
            <img src={Product} className="img" alt="Product" />
            <img src={Product} className="img" alt="Product" />
            <img src={Product} className="img" alt="Product" />
            <img src={Product} className="img" alt="Product" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
