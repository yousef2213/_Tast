import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import Visa from "../images/pay/visa.png";
import MestarCard from "../images/pay/mastercard.png";
import Paypal from "../images/pay/paypal.png";
import Maestro from "../images/pay/maestro.png";
import CardBanek from "../images/pay/cardBank.png";
import Discove from "../images/pay/discover.png";
import { QafeerContext } from "../context/context";
function SingleProduct({product,Id}) {
  const { addToCart, addToWishlist} = useContext(QafeerContext);
  const ChangeSrc = (e) => {
    let DefaultSrc = document.querySelector(".DefaultSrc");
    DefaultSrc.src = e.target.src;
  };
  const { images = [], name, regular_price, sale_price, id } = product;
  return (
    <div className="container mx-auto px-0 my-3">
      <div className="row mx-0">
        <div className="col-12 col-md-6 d-flex mx-auto single mb-3 h-100">
          <img
            src={images[0]}
            className="DefaultSrc w-100 d-block"
            alt="Product"
          />
          <div className="rowking mb-3">
            {images.map((img) => {
              return (
                <img
                key={Math.random() * images.length}
                  src={img}
                  onClick={ChangeSrc}
                  className="img"
                  alt="Product"
                />
              );
            })}
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
            {name}
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
              <AiOutlineHeart className="heart" onClick={() => addToWishlist(id)} />
            </div>
            <div className="btnIn px-2">
              <button
                className="d-block w-100 btnadd mb-0 py-2 px-2"
                onClick={() => addToCart(product.id)}
              >
                اضافة لمشتريات القفير
              </button>
            </div>
            <div className="px-2 align-self-center">
              <h4 className="h2p mb-0 align-self-center">
                <span className="text-muted sale_price">${regular_price || 0}</span> ${sale_price || `551`}
              </h4>
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
