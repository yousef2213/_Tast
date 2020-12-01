import React, { useContext } from "react";
import Product from "../images/1.png";
import Product2 from "../images/test.png";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import Visa from "../images/pay/visa.png";
import MestarCard from "../images/pay/mastercard.png";
import Paypal from "../images/pay/paypal.png";
import Maestro from "../images/pay/maestro.png";
import CardBanek from "../images/pay/cardBank.png";
import Discove from "../images/pay/discover.png";
import { QafeerContext } from "../context/context";
function SingleProduct() {
  const { ValueInput, addToCart, SingleProduct = {},Increment , decrement} = useContext(QafeerContext);
  const ChangeSrc = (e) => {
    let DefaultSrc = document.querySelector(".DefaultSrc");
    DefaultSrc.src = e.target.src;
  };

  return (
    <div className="container mx-auto">
      <div className="row mx-0">

        <div className="col-12 col-md-6 d-flex mx-auto single mb-3">
          <img src={SingleProduct.img || Product} className="DefaultSrc w-100 d-block" alt="Product" />
          <div className="rowking mb-3">
            <img src={Product} onClick={ChangeSrc} className="img imgB" alt="Product"/>
            <img src={Product2} onClick={ChangeSrc} className="img" alt="Product"/>
            <img src={Product2} onClick={ChangeSrc} className="img" alt="Product"/>
            <img src={Product} onClick={ChangeSrc} className="img" alt="Product" />
            <img src={Product} onClick={ChangeSrc} className="img" alt="Product" />
          </div>
        </div>

        <div className="col-12 col-md-6 align-self-center mx-0 mt-5 single1">
          <div className="icons text-right">
            <span className="ml-2">تعليق</span>
            <BsFillStarFill className="icon" />
            <BsFillStarFill className="icon" />
            <BsFillStarFill className="icon" />
            <BsFillStarFill className="icon" />
            <BsFillStarFill className="icon" />
          </div>
          <h3 className="text-right mt-2 mb-5 font-main font-weight-bold">
           {SingleProduct.name}
          </h3>
          <div className="d-flex justify-content-start">
            <h6 className="mb-0 pb-0 align-self-center font-main font-weight-bold">
              الالون
            </h6>
            <button className="btnW">ابيض</button>
            <button className="btnB clc">اسود رمادي</button>
          </div>
          <div className="d-flex justify-content-start pt-2">
            <h6 className="mb-0 pb-0 align-self-center font-main font-weight-bold">
              المقاس
            </h6>
            <button className="btnM clc">37</button>
            <button className="btnM">38</button>
            <button className="btnM">39</button>
          </div>
          <div className="d-flex  justify-content-center bkw">
            <div className="px-2">
              <AiOutlineHeart className="heart" />
            </div>
            <div className="btnIn px-2">
              <button className="d-block w-100 btnadd" onClick={() => addToCart(SingleProduct.id)}>
                اضافة لمشتريات النقير
              </button>
              <input className="form-control inp" defaultValue={SingleProduct.count || 1} />
              <span className="inc" onClick={() => Increment(SingleProduct.id || 1)}>+</span>
              <span className="dec" onClick={() => decrement(SingleProduct.id || 1)}>-</span>
            </div>
            <div className="px-2">
              <h2 className="h2p">${SingleProduct.price || 0}</h2>
            </div>
          </div>
          <h6 className="text-right pt-3 text-muted">التوصيل مجانا</h6>

          <div>
            <div className="text-right">
              <span className="pay">الدفع</span>
              <img src={Visa} className="visa" alt="Visa" />
              <img src={MestarCard} className="visa" alt="Visa" />
              <img src={Paypal} className="visa" alt="Visa" />
              <img src={Maestro} className="visa" alt="Visa" />
              <img src={Discove} className="visa" alt="Visa" />
              <img src={CardBanek} className="visa" alt="Visa" />
              <span className="more">المزيد</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
