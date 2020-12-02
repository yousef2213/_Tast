import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QafeerContext } from "../../context/context";

function CartTotal() {
  const { Total, clearCart } = useContext(QafeerContext);
  return (
    <div className="container">
      <div className="row mx-0 my-4">
        <div className="col-12 col-md-6 py-2">
          <div className="input">
            <input
              type="text"
              placeholder="كود الخصم"
              className="input_Search"
            />
            <span className="icon_Search_Code">تطبيق</span>
          </div>
        </div>
        <div className="col-12 col-md-6 py-2">
          <div className="input">
            <input
              type="text"
              placeholder="كود المروج"
              className="input_Search"
            />
            <span className="icon_Search_Code">تطبيق</span>
          </div>
        </div>
        <div className="col-12 col-md-5 ml-auto mt-4">
          <h3 className="text-right font-main font-weight-bold">
            اجمالى مشتريات القفير
          </h3>
          <div className="p-4 bg bg-white bg_white_rounded text-right">
            <div className="d-flex justify-content-between py-3">
              <h6>سعر الشراء</h6>
              <h6>${Total}</h6>
            </div>
            <div className="d-flex justify-content-between py-3">
              <h6>التوصيل</h6>
              <h6>1.23$</h6>
            </div>
            <hr />
            <div className="py-0">
              <h6 className="color-main">تغيير العنوان</h6>
            </div>
            <hr />
            <div className="d-flex justify-content-between py-3">
              <h6> الاجمالي</h6>
              <h6>${Total + 1.23}</h6>
            </div>
            <Link to="/Checkout">
              <button
                type="button"
                className="btn_Follow_chach text-center mx-auto my-3"
              >
                متابعة الدفع
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
